class ValueWindow {
  $valueWindow: JQuery;
  position: string;

  constructor(position: string) {
    this.position = position;
    this.$valueWindow = $('<div />', {
      class: 'slider__value-window',
    });
  }

  getValueWindow(): JQuery {
    return this.$valueWindow;
  }

  renderValueWindow(currentValue: number, indentValue: number): void {
    this.$valueWindow.text(currentValue);
    if (this.position === 'horizontal') {
      this.$valueWindow.css({ transform: `translateX(${indentValue}px)` });
    } else if (this.position === 'vertical') {
      this.$valueWindow.css({ transform: `translateY(${indentValue}px)` });
    }
  }

  updatePosition(position: string) {
    this.position = position;
  }
}

export {
  ValueWindow,
};
