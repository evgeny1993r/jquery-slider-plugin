import './value-window.scss';

class ValueWindow {
  private $valueWindow: JQuery;
  private orientation: 'horizontal' | 'vertical';

  constructor(orientation: 'horizontal' | 'vertical') {
    this.orientation = orientation;
    this.$valueWindow = $('<div />', {
      class: `value-window value-window_${orientation}`,
    });
  }

  public getValueWindow(): JQuery {
    return this.$valueWindow;
  }

  public renderValueWindow(currentValue: number, indentValue: number): void {
    this.$valueWindow.text(currentValue);
    if (this.orientation === 'horizontal') {
      this.$valueWindow.css({
        transform: `translateX(${indentValue - this.$valueWindow.outerWidth() / 2}px)`,
      });
    } else if (this.orientation === 'vertical') {
      this.$valueWindow.css({
        transform: `translate(-${this.$valueWindow.outerWidth() + 20}px,
        ${indentValue - this.$valueWindow.outerHeight() / 2}px)`,
      });
    }
  }

  public updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$valueWindow.removeClass(`value-window_${this.orientation}`);
    this.orientation = orientation;
    this.$valueWindow.addClass(`value-window_${this.orientation}`);
  }
}

export {
  ValueWindow,
};
