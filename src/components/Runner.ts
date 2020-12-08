class Runner {
  $runner: JQuery;
  position: string;

  constructor($this: JQuery, eventName: string, position: string) {
    this.position = position;
    this.$runner = $('<div />', {
      class: 'slider__runner',
      on: {
        mousedown: () => {
          $(document).on('mousemove', (e) => {
            if (this.position === 'horizontal') {
              $this.trigger(eventName, {
                positionRunner: e.pageX,
              });
            } else if (this.position === 'vertical') {
              $this.trigger(eventName, {
                positionRunner: e.pageY,
              });
            }
          });
          $(document).on('mouseup', () => {
            $(document).off('mousemove');
          });
        },
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
}

export {
  Runner,
};
