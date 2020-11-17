class ProgressBar {
  $progressBar: JQuery;

  constructor($this: JQuery) {
    this.$progressBar = $('<div />', {
      class: 'slider__progress-bar',
      on: {
        click: (e: JQuery.Event) => {
          $this.trigger('clickProgressBar', { position: e.pageX });
        },
      },
    });
  }

  getProgressBar(): JQuery {
    return this.$progressBar;
  }

  renderProgressBar(widthValue: number, indentValue: number): void {
    this.$progressBar.css({ width: `${widthValue}px` });
    this.$progressBar.css({ transform: `translateX(${indentValue}px)` });
  }
}

export {
  ProgressBar,
};
