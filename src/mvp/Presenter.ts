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
      $this,
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
    this.$this.on('setCurrentValue', (_, { currentValue }) => this.handleSliderSetCurrentValue(currentValue));
    this.$this.on('setCurrentValueMin', (_, { currentValueMin }) => this.handleSliderSetCurrentValueMin(currentValueMin));
    this.$this.on('setCurrentValueMax', (_, { currentValueMax }) => this.handleSliderSetCurrentValueMax(currentValueMax));
    this.$this.on('setPosition', (_, { position }) => this.handleSliderSetPosition(position));
    this.$this.on('setMinValue', (_, { minValue }) => this.handleSliderSetMinValue(minValue));
    this.$this.on('setMaxValue', (_, { maxValue }) => this.handleSliderSetMaxValue(maxValue));
    this.$this.on('setStep', (_, { step }) => this.handleSliderSetStep(step));
    this.$this.on('setIsShowValueWindow', (_, { isShowValueWindow }) => this.handleSliderSetIsShowValueWindow(isShowValueWindow));
    this.$this.on('setIsShowScaleValues', (_, { isShowScaleValues }) => this.handleSliderSetIsShowScaleValues(isShowScaleValues));

    this.$this.on('updateCurrentValue', () => this.handleSliderUpdateCurrentValue());
    this.$this.on('updateCurrentValueMin', () => this.handleSliderUpdateCurrentValueMin());
    this.$this.on('updateCurrentValueMax', () => this.handleSliderUpdateCurrentValueMax());
    this.$this.on('updatePosition', () => this.handleSliderUpdatePosition());
    this.$this.on('updateMinValue', () => this.handleSliderUpdateMinValue());
    this.$this.on('updateMaxValue', () => this.handleSliderUpdateMaxValue());
    this.$this.on('updateStep', () => this.handleSliderUpdateStep());
    this.$this.on('updateIsShowValueWindow', () => this.handleSliderUpdateIsShowValueWindow());
    this.$this.on('updateIsShowScaleValues', () => this.handleSliderUpdateIsShowScaleValues());
  }

  handleSliderSetCurrentValue(currentValue: number) {
    this.model.setCurrentValue(currentValue);
  }

  handleSliderSetCurrentValueMin(currentValueMin: number) {
    this.model.setCurrentValueMin(currentValueMin);
  }

  handleSliderSetCurrentValueMax(currentValueMax: number) {
    this.model.setCurrentValueMax(currentValueMax);
  }

  handleSliderSetPosition(position: string) {
    this.model.setPosition(position);
  }

  handleSliderSetMinValue(minValue: number) {
    this.model.setMinValue(minValue);
  }

  handleSliderSetMaxValue(maxValue: number) {
    this.model.setMaxValue(maxValue);
  }

  handleSliderSetStep(step: number) {
    this.model.setStep(step);
  }

  handleSliderSetIsShowValueWindow(isShowValueWindow: boolean) {
    this.model.setIsShowValueWindow(isShowValueWindow);
  }

  handleSliderSetIsShowScaleValues(isShowScaleValues: boolean) {
    this.model.setIsShowScaleValues(isShowScaleValues);
  }

  handleSliderUpdateCurrentValue() {
    this.view.updateCurrentValue(this.model.getCurrentValue());
  }

  handleSliderUpdateCurrentValueMin() {
    this.view.updateCurrentValueMin(this.model.getCurrentValueMin());
  }

  handleSliderUpdateCurrentValueMax() {
    this.view.updateCurrentValueMax(this.model.getCurrentValueMax());
  }

  handleSliderUpdatePosition() {
    this.view.updatePosition(this.model.getPosition());
  }

  handleSliderUpdateMinValue() {
    this.view.updateMinValue(this.model.getMinValue());
  }

  handleSliderUpdateMaxValue() {
    this.view.updateMaxValue(this.model.getMaxValue());
  }

  handleSliderUpdateStep() {
    this.view.updateStep(this.model.getStep());
  }

  handleSliderUpdateIsShowValueWindow() {
    this.view.updateIsShowValueWindow(this.model.getIsShowValueWindow());
  }

  handleSliderUpdateIsShowScaleValues() {
    this.view.updateIsShowScaleValues(this.model.getIsShowScaleValues());
  }
}

export {
  Presenter,
};
