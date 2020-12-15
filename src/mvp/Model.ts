import { IoptionsModel } from '../types/ModelType';

class Model {
  position: string;
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];
  step: number;
  isShowValueWindow: boolean;

  constructor({
    position,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
  }: IoptionsModel) {
    this.position = position;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
    this.step = step;
    this.isShowValueWindow = isShowValueWindow;
  }

  getPosition(): string {
    return this.position;
  }

  setPosition(value: string): void {
    this.position = value;
  }

  getMinValue(): number {
    return this.minValue;
  }

  setMinValue(minValue: number): void {
    this.minValue = minValue;
  }

  getMaxValue(): number {
    return this.maxValue;
  }

  setMaxValue(maxValue: number): void {
    this.maxValue = maxValue;
  }

  getCurrentValue(): number {
    return this.currentValue[0];
  }

  setCurrentValue(value: number): void {
    if (value < this.minValue || value > this.maxValue) return;
    this.currentValue[0] = value;
  }

  getCurrentValueMin(): number {
    return this.currentValue[0];
  }

  setCurrentValueMin(value: number): void {
    if (value < this.minValue || value > this.currentValue[1]) return;
    this.currentValue[0] = value;
  }

  getCurrentValueMax(): number {
    return this.currentValue[1];
  }

  setCurrentValueMax(value: number): void {
    if (value < this.currentValue[0] || value > this.maxValue) return;
    this.currentValue[1] = value;
  }

  getStep(): number {
    return this.step;
  }

  setStep(value: number): void {
    this.step = value;
  }

  getIsShowValueWindow(): boolean {
    return this.isShowValueWindow;
  }

  setIsShowValueWindow(isShowValueWindow: boolean): void {
    this.isShowValueWindow = isShowValueWindow;
  }
}

export {
  Model,
};
