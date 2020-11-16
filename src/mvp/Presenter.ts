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
  }
}

export {
  Presenter,
};
