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

  public getCurrentValue(): number {
    return this.currentValue[0];
  }

  public setCurrentValue(currentValue: number): void {
    const isNotValidCurrentValue = currentValue < this.minValue || currentValue > this.maxValue;
    if (isNotValidCurrentValue) return;
    this.currentValue[0] = Math.round(currentValue / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValue', value: this.currentValue[0] });
  }

  public getCurrentValueMin(): number {
    return this.currentValue[0];
  }

  public setCurrentValueMin(currentValueMin: number): void {
    const isNotValidCurrentValueMin = currentValueMin < this.minValue
      || currentValueMin > this.currentValue[1];
    if (isNotValidCurrentValueMin) return;
    this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValueMin', value: this.currentValue[0] });
  }

  public getCurrentValueMax(): number {
    return this.currentValue[1];
  }

  public setCurrentValueMax(currentValueMax: number): void {
    const isNotValidCurrentValueMax = currentValueMax < this.currentValue[0]
    || currentValueMax > this.maxValue;
    if (isNotValidCurrentValueMax) return;
    this.currentValue[1] = Math.round(currentValueMax / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValueMax', value: this.currentValue[1] });
  }

  public getOrientation(): 'horizontal' | 'vertical' {
    return this.orientation;
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
    this.step = step;
    this.broadcast({ type: 'updateStep', value: this.step });
  }

  public getIsShowValueWindow(): boolean {
    return this.isShowValueWindow;
  }

  public setIsShowValueWindow(isShowValueWindow: boolean): void {
    this.isShowValueWindow = isShowValueWindow;
    this.broadcast({ type: 'updateIsShowValueWindow', value: this.isShowValueWindow });
  }

  public getIsShowScaleValues(): boolean {
    return this.isShowScaleValues;
  }

  public setIsShowScaleValues(isShowScaleValues: boolean) {
    this.isShowScaleValues = isShowScaleValues;
    this.broadcast({ type: 'updateIsShowScaleValues', value: this.isShowScaleValues });
  }
}

export {
  Model,
};
