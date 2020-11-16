class ProgressBar {
  $progressBar: JQuery;

  constructor() {
    this.$progressBar = $('<div />', {
      class: 'slider__progress-bar',
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
