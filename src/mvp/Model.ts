import { Observer } from '../observer/Observer';

import { IOptionsModel } from '../types/ModelType';

class Model extends Observer {
  orientation: string;
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];
  step: number;
  isShowValueWindow: boolean;
  isShowScaleValues: boolean;

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

  getCurrentValue(): number {
    return this.currentValue[0];
  }

  setCurrentValue(currentValue: number): void {
    if (currentValue < this.minValue || currentValue > this.maxValue) return;
    this.currentValue[0] = Math.round(currentValue / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValue', value: this.currentValue[0] });
  }

  getCurrentValueMin(): number {
    return this.currentValue[0];
  }

  setCurrentValueMin(currentValueMin: number): void {
    if (currentValueMin < this.minValue || currentValueMin > this.currentValue[1]) return;
    this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValueMin', value: this.currentValue[0] });
  }

  getCurrentValueMax(): number {
    return this.currentValue[1];
  }

  setCurrentValueMax(currentValueMax: number): void {
    if (currentValueMax < this.currentValue[0] || currentValueMax > this.maxValue) return;
    this.currentValue[1] = Math.round(currentValueMax / this.step) * this.step;
    this.broadcast({ type: 'updateCurrentValueMax', value: this.currentValue[1] });
  }

  getOrientation(): string {
    return this.orientation;
  }

  setOrientation(orientation: string): void {
    if (orientation === 'horizontal' || orientation === 'vertical') {
      this.orientation = orientation;
      this.broadcast({ type: 'updateOrientation', value: this.orientation });
    }
  }

  getMinValue(): number {
    return this.minValue;
  }

  setMinValue(minValue: number): void {
    if (minValue > this.currentValue[0]) return;
    this.minValue = minValue;
    this.broadcast({ type: 'updateMinValue', value: this.minValue });
  }

  getMaxValue(): number {
    return this.maxValue;
  }

  setMaxValue(maxValue: number): void {
    if (this.currentValue.length === 1 && maxValue < this.currentValue[0]) return;
    if (this.currentValue.length === 2 && maxValue < this.currentValue[1]) return;
    this.maxValue = maxValue;
    this.broadcast({ type: 'updateMaxValue', value: this.maxValue });
  }

  getStep(): number {
    return this.step;
  }

  setStep(step: number): void {
    this.step = step;
    this.broadcast({ type: 'updateStep', value: this.step });
  }

  getIsShowValueWindow(): boolean {
    return this.isShowValueWindow;
  }

  setIsShowValueWindow(isShowValueWindow: boolean): void {
    this.isShowValueWindow = isShowValueWindow;
    this.broadcast({ type: 'updateIsShowValueWindow', value: this.isShowValueWindow });
  }

  getIsShowScaleValues(): boolean {
    return this.isShowScaleValues;
  }

  setIsShowScaleValues(isShowScaleValues: boolean) {
    this.isShowScaleValues = isShowScaleValues;
    this.broadcast({ type: 'updateIsShowScaleValues', value: this.isShowScaleValues });
  }
}

export {
  Model,
};
