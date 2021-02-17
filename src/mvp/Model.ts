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

  public setCurrentValue(currentValue: number): void {
    const isNotValidCurrentValue = currentValue < this.minValue || currentValue > this.maxValue;
    if (isNotValidCurrentValue) return;
    this.currentValue[0] = Math.round(currentValue / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValue', value: this.currentValue[0] });
  }

  public setCurrentValueMin(currentValueMin: number): void {
    const isNotValidCurrentValueMin = currentValueMin < this.minValue
      || currentValueMin > this.currentValue[1];
    if (isNotValidCurrentValueMin) return;
    this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValueMin', value: this.currentValue[0] });
  }

  public setCurrentValueMax(currentValueMax: number): void {
    const isNotValidCurrentValueMax = currentValueMax < this.currentValue[0]
    || currentValueMax > this.maxValue;
    if (isNotValidCurrentValueMax) return;
    this.currentValue[1] = Math.round(currentValueMax / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValueMax', value: this.currentValue[1] });
  }

  public setOrientation(orientation: 'horizontal' | 'vertical'): void {
    this.orientation = orientation;
    this.broadcast({ type: 'updateOrientation', value: this.orientation });
  }

  public setMinValue(minValue: number): void {
    if (minValue > this.currentValue[0]) return;
    this.minValue = minValue;
    this.broadcast({ type: 'updateMinValue', value: this.minValue });
  }

  public setMaxValue(maxValue: number): void {
    const isNotValidMaxValue = (this.currentValue.length === 1 && maxValue < this.currentValue[0])
    || (this.currentValue.length === 2 && maxValue < this.currentValue[1]);
    if (isNotValidMaxValue) return;
    this.maxValue = maxValue;
    this.broadcast({ type: 'updateMaxValue', value: this.maxValue });
  }

  public setStep(step: number): void {
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
