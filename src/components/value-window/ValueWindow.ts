import './value-window.scss';

class ValueWindow {
  $valueWindow: JQuery;
  orientation: string;

  constructor(orientation: string) {
    this.orientation = orientation;
    this.$valueWindow = $('<div />', {
      class: `value-window value-window_${orientation}`,
    });
  }

  getValueWindow(): JQuery {
    return this.$valueWindow;
  }

  renderValueWindow(currentValue: number, indentValue: number): void {
    this.$valueWindow.text(currentValue);
    if (this.orientation === 'horizontal') {
      this.$valueWindow.css({ transform: `translateX(${indentValue - this.$valueWindow.outerWidth() / 2}px)` });
    } else if (this.orientation === 'vertical') {
      this.$valueWindow.css({ transform: `translate(-${this.$valueWindow.outerWidth() + 20}px, ${indentValue - this.$valueWindow.outerHeight() / 2}px)` });
    }
  }

  updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$valueWindow.removeClass(`value-window_${this.orientation}`);
    this.orientation = orientation;
    this.$valueWindow.addClass(`value-window_${this.orientation}`);
  }
}

export {
  ValueWindow,
};
