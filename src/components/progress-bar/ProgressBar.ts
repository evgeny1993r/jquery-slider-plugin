import { Observer } from '../../observer/Observer';

import './progress-bar.scss';

class ProgressBar extends Observer {
  $progressBar: JQuery;
  orientation: string;
  size: string;

  constructor(orientation: string) {
    super();
    this.orientation = orientation;
    this.$progressBar = $('<div />', {
      class: `progress-bar progress-bar_${orientation}`,
      on: {
        click: (e: JQuery.Event) => this.handleProgressBar(e),
      },
    });
  }

  getProgressBar(): JQuery {
    return this.$progressBar;
  }

  renderProgressBar(sizeValue: number, indentValue: number): void {
    if (this.orientation === 'horizontal') {
      this.size = this.$progressBar.css('height');
      this.$progressBar.css({
        width: `${sizeValue}px`,
        transform: `translateX(${indentValue}px)`,
      });
    } else if (this.orientation === 'vertical') {
      this.size = this.$progressBar.css('width');
      this.$progressBar.css({
        height: `${sizeValue}px`,
        transform: `translateY(${indentValue}px)`,
      });
    }
  }

  handleProgressBar(e: JQuery.Event): void {
    if (this.orientation === 'horizontal') {
      this.broadcast({ type: 'clickScale', value: e.pageX });
    } else if (this.orientation === 'vertical') {
      this.broadcast({ type: 'clickScale', value: e.pageY });
    }
  }

  updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$progressBar.removeClass(`progress-bar_${this.orientation}`);
    this.orientation = orientation;
    this.$progressBar.addClass(`progress-bar_${this.orientation}`);
    if (this.orientation === 'horizontal') {
      this.$progressBar.css({
        height: this.size,
        transform: 'translateX(0)',
      });
    } else if (this.orientation === 'vertical') {
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
