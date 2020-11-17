class Runner {
  $runner: JQuery;

  constructor($this: JQuery, eventName: string) {
    this.$runner = $('<div />', {
      class: 'slider__runner',
      on: {
        mousedown: () => {
          $(document).on('mousemove', (e) => {
            $this.trigger(eventName, { positionRunner: (e.pageX + this.$runner.outerWidth() / 2) });
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

  updataPositionRunner(value: number): void {
    this.$runner.css({ transform: `translateX(${value}px)` });
  }
}

export {
  Runner,
};
