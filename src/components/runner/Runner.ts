import { Observer } from '../../observer/Observer';

import './runner.scss';

class Runner extends Observer {
  private eventName: string;
  private orientation: 'horizontal' | 'vertical';
  private $document: JQuery<Document>;
  private $runner: JQuery;

  constructor(orientation: 'horizontal' | 'vertical') {
    super();
    this.orientation = orientation;
    this.$document = $(document);
    this.$runner = $('<div />', {
      class: `runner runner_${orientation}`,
      on: {
        mousedown: () => this.handleRunnerMousedown(),
      },
    });
  }

  public getRunner(): JQuery {
    return this.$runner;
  }

  public updatePositionRunner(value: number): void {
    if (this.orientation === 'horizontal') {
      this.$runner.css({ transform: `translateX(${value}px)` });
    } else if (this.orientation === 'vertical') {
      this.$runner.css({ transform: `translateY(${value}px)` });
    }
  }

  public updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$runner.removeClass(`runner_${this.orientation}`);
    this.orientation = orientation;
    this.$runner.addClass(`runner_${this.orientation}`);
  }

  private handleRunnerMousedown() {
    this.$document.on('mousemove', (e: JQuery.Event) => this.handleDocumentMousemove(e));
    this.$document.on('mouseup', () => this.handleDocumentMouseup());
  }

  private handleDocumentMousemove(e: JQuery.Event) {
    if (this.orientation === 'horizontal') {
      this.broadcast({ type: 'updatePositionRunner', value: e.pageX });
    } else if (this.orientation === 'vertical') {
      this.broadcast({ type: 'updatePositionRunner', value: e.pageY });
    }
  }

  private handleDocumentMouseup() {
    this.$document.off('mousemove');
  }
}

export {
  Runner,
};
