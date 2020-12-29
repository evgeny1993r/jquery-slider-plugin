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
    isShowScaleValues,
  }: Ioptions) {
    this.$this = $this;
    this.model = new Model({
      position,
      minValue,
      maxValue,
      currentValue,
      step,
      isShowValueWindow,
      isShowScaleValues,
    });
    this.view = new View({
      $this,
      position,
      minValue,
      maxValue,
      currentValue,
      step,
      isShowValueWindow,
      isShowScaleValues,
    });

    this.init();
  }

  init() {
    this.$this.on('updateCurrentValue', (_, { currentValue }) => this.handleSliderUpdateCurrentValue(currentValue));
    this.$this.on('updateCurrentValueMin', (_, { currentValueMin }) => this.handleSliderUpdateCurrentValueMin(currentValueMin));
    this.$this.on('updateCurrentValueMax', (_, { currentValueMax }) => this.handleSliderUpdateCurrentValueMax(currentValueMax));
    this.$this.on('updatePosition', (_, { position }) => this.handleSliderUpdatePosition(position));
    this.$this.on('updateMinValue', (_, { minValue }) => this.handleSliderUpdateMinValue(minValue));
    this.$this.on('updateMaxValue', (_, { maxValue }) => this.handleSliderUpdateMaxValue(maxValue));
    this.$this.on('updateStep', (_, { step }) => this.handleSliderUpdateStep(step));
    this.$this.on('updateIsShowValueWindow', (_, { isShowValueWindow }) => this.handleSliderUpdateIsShowValueWindow(isShowValueWindow));
    this.$this.on('updateIsShowScaleValues', (_, { isShowScaleValues }) => this.handleSliderUpdateIsShowScaleValues(isShowScaleValues));
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
    this.model.setPosition(position);
    this.view.updatePosition(this.model.getPosition());
  }

  handleSliderUpdateMinValue(minValue: number) {
    this.model.setMinValue(minValue);
    this.view.updateMinValue(this.model.getMinValue());
  }

  handleSliderUpdateMaxValue(maxValue: number) {
    this.model.setMaxValue(maxValue);
    this.view.updateMaxValue(this.model.getMaxValue());
  }

  handleSliderUpdateStep(step: number) {
    this.model.setStep(step);
    this.view.updateStep(this.model.getStep());
  }

  handleSliderUpdateIsShowValueWindow(isShowValueWindow: boolean) {
    this.model.setIsShowValueWindow(isShowValueWindow);
    this.view.updateIsShowValueWindow(this.model.getIsShowValueWindow());
  }

  handleSliderUpdateIsShowScaleValues(isShowScaleValues: boolean) {
    this.model.setIsShowScaleValues(isShowScaleValues);
    this.view.updateIsShowScaleValues(this.model.getIsShowScaleValues());
  }
}

export {
  Presenter,
};
