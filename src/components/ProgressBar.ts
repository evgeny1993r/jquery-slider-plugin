class ProgressBar {
  $this: JQuery;
  $progressBar: JQuery;
  position: string;

  constructor($this: JQuery, position: string) {
    this.$this = $this;
    this.position = position;
    this.$progressBar = $('<div />', {
      class: 'slider__progress-bar',
      on: {
        click: (e: JQuery.Event) => this.handleProgressBar(e),
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

  handleProgressBar(e: JQuery.Event): void {
    if (this.position === 'horizontal') {
      this.$this.trigger('clickProgressBar', { position: e.pageX });
    } else if (this.position === 'vertical') {
      this.$this.trigger('clickProgressBar', { position: e.pageY });
    }
  }
}

export {
  ProgressBar,
};
