import { Observer } from '../observer/Observer';

import { IOptionsModel } from '../types/mvp/IModel';

class Model extends Observer {
  private orientation: 'horizontal' | 'vertical';
  private minValue: number;
  private maxValue: number;
  private currentValue: [number, number?];
  private step: number;
  private isShowValueWindow: boolean;
  private isShowScaleValues: boolean;

  constructor({
    orientation,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
    isShowScaleValues,
  }: IOptionsModel) {
    super();
    this.orientation = orientation;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
    this.step = step;
    this.isShowValueWindow = isShowValueWindow;
    this.isShowScaleValues = isShowScaleValues;
  }

  public getCurrentValue(): [number, number?] {
    return this.currentValue;
  }

  public setCurrentValue(currentValue: number): void {
    const isValidCurrentValue = currentValue >= this.minValue && currentValue <= this.maxValue;
    if (!isValidCurrentValue) return;
    this.currentValue[0] = Math.round(currentValue / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValue', value: this.currentValue[0] });
  }

  public setCurrentValueMin(currentValueMin: number): void {
    if (this.currentValue.length === 1) {
      const isValidCurrentValueMin = currentValueMin >= this.minValue
        && currentValueMin <= this.maxValue;
      if (!isValidCurrentValueMin) return;
      this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
      this.broadcast({ type: 'updateCurrentValueMin', value: this.currentValue[0] });
    } else if (this.currentValue.length === 2) {
      const isValidCurrentValueMin = currentValueMin >= this.minValue
        && currentValueMin <= this.currentValue[1];
      if (!isValidCurrentValueMin) return;
      this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
      this.broadcast({ type: 'updateCurrentValueMin', value: this.currentValue[0] });
    }
    const isValidCurrentValueMin = currentValueMin >= this.minValue
      && currentValueMin <= this.currentValue[1];
    if (!isValidCurrentValueMin) return;
    this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValueMin', value: this.currentValue[0] });
  }

  public setCurrentValueMax(currentValueMax: number): void {
    if (this.currentValue.length === 1) {
      const isValidCurrentValueMax = currentValueMax > this.minValue
      && currentValueMax <= this.maxValue;
      if (!isValidCurrentValueMax) return;
      this.currentValue[1] = Math.round(currentValueMax / this.step) * this.step;
      this.broadcast({ type: 'updateCurrentValueMax', value: this.currentValue[1] });
    } else if (this.currentValue.length === 2) {
      const isValidCurrentValueMax = currentValueMax > this.currentValue[0]
      && currentValueMax <= this.maxValue;
      if (!isValidCurrentValueMax) return;
      this.currentValue[1] = Math.round(currentValueMax / this.step) * this.step;
      this.broadcast({ type: 'updateCurrentValueMax', value: this.currentValue[1] });
    }
  }

  public setOrientation(orientation: 'horizontal' | 'vertical'): void {
    this.orientation = orientation;
    this.broadcast({ type: 'updateOrientation', value: this.orientation });
  }

  public getMinValue(): number {
    return this.minValue;
  }

  public setMinValue(minValue: number): void {
    if (minValue > this.currentValue[0]) return;
    this.minValue = minValue;
    this.broadcast({ type: 'updateMinValue', value: this.minValue });
  }

  public getMaxValue(): number {
    return this.maxValue;
  }

  public setMaxValue(maxValue: number): void {
    const isNotValidMaxValue = (this.currentValue.length === 1 && maxValue < this.currentValue[0])
    || (this.currentValue.length === 2 && maxValue < this.currentValue[1]);
    if (isNotValidMaxValue) return;
    this.maxValue = maxValue;
    this.broadcast({ type: 'updateMaxValue', value: this.maxValue });
  }

  public getStep(): number {
    return this.step;
  }

  public setStep(step: number): void {
    if (step > (this.maxValue - this.minValue) / 10) return;
    this.step = step;
    this.broadcast({ type: 'updateStep', value: this.step });
  }

  public setIsShowValueWindow(isShowValueWindow: boolean): void {
    this.isShowValueWindow = isShowValueWindow;
    this.broadcast({ type: 'updateIsShowValueWindow', value: this.isShowValueWindow });
  }

  public setIsShowScaleValues(isShowScaleValues: boolean) {
    this.isShowScaleValues = isShowScaleValues;
    this.broadcast({ type: 'updateIsShowScaleValues', value: this.isShowScaleValues });
  }

  // eslint-disable-next-line consistent-return
  public getState(value: string): number | 'horizontal' | 'vertical' | boolean {
    switch (value) {
      case 'currentValue':
        return this.currentValue[0];
      case 'currentValueMin':
        return this.currentValue[0];
      case 'currentValueMax':
        return this.currentValue[1];
      case 'orientation':
        return this.orientation;
      case 'minValue':
        return this.minValue;
      case 'maxValue':
        return this.maxValue;
      case 'step':
        return this.step;
      case 'isShowValueWindow':
        return this.isShowValueWindow;
      case 'isShowScaleValues':
        return this.isShowScaleValues;
      default:
    }
  }
}

export {
  Model,
};
