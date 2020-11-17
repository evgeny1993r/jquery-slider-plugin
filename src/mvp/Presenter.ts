import { Ioptions, IModel, IView } from '../types/PresenterType';

import { Model } from './Model';
import { View } from './View';

class Presenter {
  $this: JQuery;
  model: IModel;
  view: IView;

  constructor({
    $this,
    minValue,
    maxValue,
    currentValue,
  }: Ioptions) {
    this.$this = $this;
    this.model = new Model({
      minValue,
      maxValue,
      currentValue,
    });
    this.view = new View({
      $this,
      minValue,
      maxValue,
      currentValue,
    });

    this.init();
  }

  init() {
    this.$this.on('updataCurrentValue', (_, { currentValue }) => {
      this.model.setCurrentValue(currentValue);
      this.view.updataCurrentValue(this.model.getCurrentValue());
    });

    this.$this.on('updataCurrentValueMin', (_, { currentValueMin }) => {
      this.model.setCurrentValueMin(currentValueMin);
      this.view.updataCurrentValueMin(this.model.getCurrentValueMin());
    });

    this.$this.on('updataCurrentValueMax', (_, { currentValueMax }) => {
      this.model.setCurrentValueMax(currentValueMax);
      this.view.updataCurrentValueMax(this.model.getCurrentValueMax());
    });
  }
}

export {
  Presenter,
};
