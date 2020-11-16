class Runner {
  $runner: JQuery;

  constructor($this: JQuery) {
    this.$runner = $('<div />', {
      class: 'slider__runner',
      on: {
        mousedown: () => {
          $(document).on('mousemove', (e) => {
            $this.trigger('updataPositionRunner', { positionRunner: e.pageX });
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
