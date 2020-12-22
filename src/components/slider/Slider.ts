import './slider.scss';

class Slider {
  $slider: JQuery;

  constructor(position: string) {
    this.$slider = $('<div />', {
      class: `slider slider_${position}`,
    });
  }

  getSlider(): JQuery {
    return this.$slider;
  }
}

export {
  Slider,
};
