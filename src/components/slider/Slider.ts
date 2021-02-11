import './slider.scss';

class Slider {
  $slider: JQuery;

  constructor(orientation: string) {
    this.$slider = $('<div />', {
      class: `slider slider_${orientation}`,
    });
  }

  getSlider(): JQuery {
    return this.$slider;
  }
}

export {
  Slider,
};
