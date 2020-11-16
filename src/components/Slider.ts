class Slider {
  $slider: JQuery;

  constructor() {
    this.$slider = $('<div />', {
      class: 'slider',
    });
  }

  getSlider(): JQuery {
    return this.$slider;
  }
}

export {
  Slider,
};
