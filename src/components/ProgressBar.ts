class ProgressBar {
  $progressBar: JQuery;

  constructor($this: JQuery) {
    this.$progressBar = $('<div />', {
      class: 'slider__progress-bar',
      on: {
        click: (e: JQuery.Event) => {
          $this.trigger('updataPositionRunner', { positionRunner: e.pageX });
        },
      },
    });
  }

  getProgressBar(): JQuery {
    return this.$progressBar;
  }

  updataWidthProgressBar(value: number): void {
    this.$progressBar.css({ width: `${value}px` });
  }
}

export {
  ProgressBar,
};
