import './progress-bar.scss';

class ProgressBar {
  $this: JQuery;
  $progressBar: JQuery;
  position: string;
  size: string;

  constructor($this: JQuery, position: string) {
    this.$this = $this;
    this.position = position;
    this.$progressBar = $('<div />', {
      class: `progress-bar progress-bar_${position}`,
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
      this.size = this.$progressBar.css('height');
      this.$progressBar.css({
        width: `${sizeValue}px`,
        transform: `translateX(${indentValue}px)`,
      });
    } else if (this.position === 'vertical') {
      this.size = this.$progressBar.css('width');
      this.$progressBar.css({
        height: `${sizeValue}px`,
        transform: `translateY(${indentValue}px)`,
      });
    }
  }

  handleProgressBar(e: JQuery.Event): void {
    if (this.position === 'horizontal') {
      this.$this.trigger('clickProgressBar', { position: e.pageX });
    } else if (this.position === 'vertical') {
      this.$this.trigger('clickProgressBar', { position: e.pageY });
    }
  }

  updatePosition(position: string) {
    this.$progressBar.removeClass(`progress-bar_${this.position}`);
    this.position = position;
    this.$progressBar.addClass(`progress-bar_${this.position}`);
    if (this.position === 'horizontal') {
      this.$progressBar.css({
        height: this.size,
        transform: 'translateX(0)',
      });
    } else if (this.position === 'vertical') {
      this.$progressBar.css({
        width: this.size,
        transform: 'translateY(0)',
      });
    }
  }
}

export {
  ProgressBar,
};
