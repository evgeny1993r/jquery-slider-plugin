import { IoptionsModel } from '../types/ModelType';

class Model {
  position: string;
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];
  step: number;
  isShowValueWindow: boolean;
  isShowScaleValues: boolean;

  constructor({
    position,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
    isShowScaleValues,
  }: IoptionsModel) {
    this.position = position;
    this.minValue = minValue;
    this.maxValue = maxValue;
    if (currentValue.length === 1) {
      this.currentValue = [Math.round(currentValue[0] / this.step) * this.step];
    } else if (currentValue.length === 2) {
      this.currentValue = [
        Math.round(currentValue[0] / this.step) * this.step,
        Math.round(currentValue[1] / this.step) * this.step,
      ]
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
  }

  getCurrentValueMin(): number {
    return this.currentValue[0];
  }

  setCurrentValueMin(currentValueMin: number): void {
    if (currentValueMin < this.minValue || currentValueMin > this.currentValue[1]) return;
    this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
  }

  getCurrentValueMax(): number {
    return this.currentValue[1];
  }

  setCurrentValueMax(currentValueMax: number): void {
    if (currentValueMax < this.currentValue[0] || currentValueMax > this.maxValue) return;
    this.currentValue[1] = Math.round(currentValueMax / this.step) * this.step;
  }

  getPosition(): string {
    return this.position;
  }

  setPosition(position: string): void {
    this.position = position;
  }

  getMinValue(): number {
    return this.minValue;
  }

  setMinValue(minValue: number): void {
    if (minValue > this.currentValue[0]) return
    this.minValue = minValue;
  }

  getMaxValue(): number {
    return this.maxValue;
  }

  setMaxValue(maxValue: number): void {
    if (this.currentValue.length === 1 && maxValue < this.currentValue[0]) return 
    if (this.currentValue.length === 2 && maxValue < this.currentValue[1]) return 
    this.maxValue = maxValue;
  }

  getStep(): number {
    return this.step;
  }

  setStep(step: number): void {
    this.step = step;
  }

  getIsShowValueWindow(): boolean {
    return this.isShowValueWindow;
  }

  setIsShowValueWindow(isShowValueWindow: boolean): void {
    this.isShowValueWindow = isShowValueWindow;
  }

  getIsShowScaleValues(): boolean {
    return this.isShowScaleValues;
  }

  setIsShowScaleValues(isShowScaleValues: boolean) {
    this.isShowScaleValues = isShowScaleValues;
  }
}

export {
  Model,
};
