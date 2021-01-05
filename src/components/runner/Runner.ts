import './runner.scss';

class Runner {
  eventName: string;
  orientation: 'horizontal' | 'vertical';
  $document: JQuery<Document>;
  $runner: JQuery;

  constructor(eventName: string, orientation: 'horizontal' | 'vertical') {
    this.eventName = eventName;
    this.orientation = orientation;
    this.$document = $(document);
    this.$runner = $('<div />', {
      class: `runner runner_${orientation}`,
      on: {
        mousedown: () => this.handleRunnerMousedown(),
      },
    });
  }

  getRunner(): JQuery {
    return this.$runner;
  }

  updatePositionRunner(value: number): void {
    if (this.orientation === 'horizontal') {
      this.$runner.css({ transform: `translateX(${value}px)` });
    } else if (this.orientation === 'vertical') {
      this.$runner.css({ transform: `translateY(${value}px)` });
    }
  }

  handleRunnerMousedown() {
    this.$document.on('mousemove', (e: JQuery.Event) => this.handleDocumentMousemove(e));
    this.$document.on('mouseup', () => this.handleDocumentMouseup());
  }

  handleDocumentMousemove(e: JQuery.Event) {
    if (this.orientation === 'horizontal') {
      this.$runner.trigger(this.eventName, {
        positionRunner: e.pageX,
      });
    } else if (this.orientation === 'vertical') {
      this.$runner.trigger(this.eventName, {
        positionRunner: e.pageY,
      });
    }
  }

  handleDocumentMouseup() {
    this.$document.off('mousemove');
  }

  updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$runner.removeClass(`runner_${this.orientation}`);
    this.orientation = orientation;
    this.$runner.addClass(`runner_${this.orientation}`);
  }
}

export {
  Runner,
};
