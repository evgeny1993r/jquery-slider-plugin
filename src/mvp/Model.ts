import { IOptionsModel } from '../types/ModelType';

class Model {
  $this: JQuery;
  orientation: 'horizontal' | 'vertical';
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];
  step: number;
  isShowValueWindow: boolean;
  isShowScaleValues: boolean;

  constructor({
    $this,
    orientation,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
    isShowScaleValues,
  }: IOptionsModel) {
    this.$this = $this;
    this.orientation = orientation;
    this.minValue = minValue;
    this.maxValue = maxValue;
    if (currentValue.length === 1) {
      this.currentValue = [Math.round(currentValue[0] / this.step) * this.step];
    } else if (currentValue.length === 2) {
      this.currentValue = [
        Math.round(currentValue[0] / this.step) * this.step,
        Math.round(currentValue[1] / this.step) * this.step,
      ];
    }
    this.step = step;
    this.isShowValueWindow = isShowValueWindow;
    this.isShowScaleValues = isShowScaleValues;
  }

  getCurrentValue(): number {
    return this.currentValue[0];
  }

  setCurrentValue(currentValue: number): void {
    if (currentValue < this.minValue || currentValue > this.maxValue) return;
    this.currentValue[0] = Math.round(currentValue / this.step) * this.step;
    this.$this.trigger('updateCurrentValue', { currentValue: this.currentValue[0] });
  }

  getCurrentValueMin(): number {
    return this.currentValue[0];
  }

  setCurrentValueMin(currentValueMin: number): void {
    if (currentValueMin < this.minValue || currentValueMin > this.currentValue[1]) return;
    this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
    this.$this.trigger('updateCurrentValueMin', { currentValueMin: this.currentValue[0] });
  }

  getCurrentValueMax(): number {
    return this.currentValue[1];
  }

  setCurrentValueMax(currentValueMax: number): void {
    if (currentValueMax < this.currentValue[0] || currentValueMax > this.maxValue) return;
    this.currentValue[1] = Math.round(currentValueMax / this.step) * this.step;
    this.$this.trigger('updateCurrentValueMax', { currentValueMax: this.currentValue[1] });
  }

  getOrientation(): 'horizontal' | 'vertical' {
    return this.orientation;
  }

  setOrientation(orientation: 'horizontal' | 'vertical'): void {
    this.orientation = orientation;
    this.$this.trigger('updateOrientation', { orientation: this.orientation });
  }

  getMinValue(): number {
    return this.minValue;
  }

  setMinValue(minValue: number): void {
    if (minValue > this.currentValue[0]) return;
    this.minValue = minValue;
    this.$this.trigger('updateMinValue', { minValue: this.minValue });
  }

  getMaxValue(): number {
    return this.maxValue;
  }

  setMaxValue(maxValue: number): void {
    if (this.currentValue.length === 1 && maxValue < this.currentValue[0]) return;
    if (this.currentValue.length === 2 && maxValue < this.currentValue[1]) return;
    this.maxValue = maxValue;
    this.$this.trigger('updateMaxValue', { maxValue: this.maxValue });
  }

  getStep(): number {
    return this.step;
  }

  setStep(step: number): void {
    this.step = step;
    this.$this.trigger('updateStep', { step: this.step });
  }

  getIsShowValueWindow(): boolean {
    return this.isShowValueWindow;
  }

  setIsShowValueWindow(isShowValueWindow: boolean): void {
    this.isShowValueWindow = isShowValueWindow;
    this.$this.trigger('updateIsShowValueWindow', { isShowValueWindow: this.isShowValueWindow });
  }

  getIsShowScaleValues(): boolean {
    return this.isShowScaleValues;
  }

  setIsShowScaleValues(isShowScaleValues: boolean) {
    this.isShowScaleValues = isShowScaleValues;
    this.$this.trigger('updateIsShowScaleValues', { isShowScaleValues: this.isShowScaleValues });
  }
}

export {
  Model,
};
