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
    this.$this.on('updateCurrentValue', (_, { currentValue }) => {
      this.model.setCurrentValue(currentValue);
      this.view.updateCurrentValue(this.model.getCurrentValue());
    });

    this.$this.on('updateCurrentValueMin', (_, { currentValueMin }) => {
      this.model.setCurrentValueMin(currentValueMin);
      this.view.updateCurrentValueMin(this.model.getCurrentValueMin());
    });

    this.$this.on('updateCurrentValueMax', (_, { currentValueMax }) => {
      this.model.setCurrentValueMax(currentValueMax);
      this.view.updateCurrentValueMax(this.model.getCurrentValueMax());
    });
  }
}

export {
  Presenter,
};
