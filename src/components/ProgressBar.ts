class ProgressBar {
  $progressBar: JQuery;
  position: string;

  constructor($this: JQuery, position: string) {
    this.position = position;
    this.$progressBar = $('<div />', {
      class: 'slider__progress-bar',
      on: {
        click: (e: JQuery.Event) => {
          if (this.position === 'horizontal') {
            $this.trigger('clickProgressBar', { position: e.pageX });
          } else if (this.position === 'vertical') {
            $this.trigger('clickProgressBar', { position: e.pageY });
          }
        },
      },
    });
  }

  getProgressBar(): JQuery {
    return this.$progressBar;
  }

  renderProgressBar(sizeValue: number, indentValue: number): void {
    if (this.position === 'horizontal') {
      this.$progressBar.css({ width: `${sizeValue}px` });
      this.$progressBar.css({ transform: `translateX(${indentValue}px)` });
    } else if (this.position === 'vertical') {
      this.$progressBar.css({ height: `${sizeValue}px` });
      this.$progressBar.css({ transform: `translateY(${indentValue}px)` });
    }
  }
}

export {
  ProgressBar,
};
