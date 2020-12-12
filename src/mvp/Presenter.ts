import { Ioptions, IModel, IView } from '../types/PresenterType';

import { Model } from './Model';
import { View } from './View';

class Presenter {
  $this: JQuery;
  model: IModel;
  view: IView;

  constructor({
    $this,
    position,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
    $inputElement,
    symbol,
  }: Ioptions) {
    this.$this = $this;
    this.model = new Model({
      minValue,
      maxValue,
      currentValue,
    });
    this.view = new View({
      $this,
      position,
      minValue,
      maxValue,
      currentValue,
      step,
      isShowValueWindow,
      $inputElement,
      symbol,
    });

    this.init();
  }

  init() {
    this.$this.on('updateCurrentValue', (_, { currentValue }) => this.handleSliderUpdateCurrentValue(currentValue));
    this.$this.on('updateCurrentValueMin', (_, { currentValueMin }) => this.handleSliderUpdateCurrentValueMin(currentValueMin));
    this.$this.on('updateCurrentValueMax', (_, { currentValueMax }) => this.handleSliderUpdateCurrentValueMax(currentValueMax));
    this.$this.on('updatePosition', (_, { position }) => this.handleSliderUpdatePosition(position));
  }

  handleSliderUpdateCurrentValue(currentValue: number) {
    this.model.setCurrentValue(currentValue);
    this.view.updateCurrentValue(this.model.getCurrentValue());
  }

  handleSliderUpdateCurrentValueMin(currentValueMin: number) {
    this.model.setCurrentValueMin(currentValueMin);
    this.view.updateCurrentValueMin(this.model.getCurrentValueMin());
  }

  handleSliderUpdateCurrentValueMax(currentValueMax: number) {
    this.model.setCurrentValueMax(currentValueMax);
    this.view.updateCurrentValueMax(this.model.getCurrentValueMax());
  }

  handleSliderUpdatePosition(position: string) {
    this.view.updatePosition(position);
  }
}

export {
  Presenter,
};
