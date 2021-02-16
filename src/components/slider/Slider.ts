import './slider.scss';

class Slider {
  private $slider: JQuery;

  constructor(orientation: 'horizontal' | 'vertical') {
    this.$slider = $('<div />', {
      class: `slider slider_${orientation}`,
    });
  }

  public getSlider(): JQuery {
    return this.$slider;
  }
}

export {
  Slider,
};
