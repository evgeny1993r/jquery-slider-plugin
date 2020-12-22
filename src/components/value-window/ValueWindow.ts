import './value-window.scss';

class ValueWindow {
  $valueWindow: JQuery;
  position: string;

  constructor(position: string) {
    this.position = position;
    this.$valueWindow = $('<div />', {
      class: `value-window value-window_${position}`,
    });
  }

  getValueWindow(): JQuery {
    return this.$valueWindow;
  }

  renderValueWindow(currentValue: number, indentValue: number): void {
    this.$valueWindow.text(currentValue);
    if (this.position === 'horizontal') {
      this.$valueWindow.css({ transform: `translateX(${indentValue - this.$valueWindow.outerWidth() / 2}px)` });
    } else if (this.position === 'vertical') {
      this.$valueWindow.css({ transform: `translate(-${this.$valueWindow.outerWidth() + 20}px, ${indentValue - this.$valueWindow.outerHeight() / 2}px)` });
    }
  }

  updatePosition(position: string) {
    this.$valueWindow.removeClass(`value-window_${this.position}`);
    this.position = position;
    this.$valueWindow.addClass(`value-window_${this.position}`);
  }
}

export {
  ValueWindow,
};
