import './runner.scss';

class Runner {
  eventName: string;
  position: string;
  $document: JQuery<Document>;
  $runner: JQuery;

  constructor(eventName: string, position: string) {
    this.eventName = eventName;
    this.position = position;
    this.$document = $(document);
    this.$runner = $('<div />', {
      class: `runner runner_${position}`,
      on: {
        mousedown: () => this.handleRunnerMousedown(),
      },
    });
  }

  getRunner(): JQuery {
    return this.$runner;
  }

  updatePositionRunner(value: number): void {
    if (this.position === 'horizontal') {
      this.$runner.css({ transform: `translateX(${value}px)` });
    } else if (this.position === 'vertical') {
      this.$runner.css({ transform: `translateY(${value}px)` });
    }
  }

  handleRunnerMousedown() {
    this.$document.on('mousemove', (e: JQuery.Event) => this.handleDocumentMousemove(e));
    this.$document.on('mouseup', () => this.handleDocumentMouseup());
  }

  handleDocumentMousemove(e: JQuery.Event) {
    if (this.position === 'horizontal') {
      this.$runner.trigger(this.eventName, {
        positionRunner: e.pageX,
      });
    } else if (this.position === 'vertical') {
      this.$runner.trigger(this.eventName, {
        positionRunner: e.pageY,
      });
    }
  }

  handleDocumentMouseup() {
    this.$document.off('mousemove');
  }

  updatePosition(position: string) {
    this.$runner.removeClass(`runner_${this.position}`);
    this.position = position;
    this.$runner.addClass(`runner_${this.position}`);
  }
}

export {
  Runner,
};
