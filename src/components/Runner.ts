class Runner {
  $this: JQuery;
  eventName: string;
  position: string;
  $document: JQuery<Document>;
  $runner: JQuery;

  constructor($this: JQuery, eventName: string, position: string) {
    this.$this = $this;
    this.eventName = eventName;
    this.position = position;
    this.$document = $(document);
    this.$runner = $('<div />', {
      class: 'slider__runner',
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
      this.$this.trigger(this.eventName, {
        positionRunner: e.pageX,
      });
    } else if (this.position === 'vertical') {
      this.$this.trigger(this.eventName, {
        positionRunner: e.pageY,
      });
    }
  }

  handleDocumentMouseup() {
    this.$document.off('mousemove');
  }

  updatePosition(position: string) {
    this.position = position;
  }
}

export {
  Runner,
};
