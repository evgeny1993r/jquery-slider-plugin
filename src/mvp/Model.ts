import { IoptionsModel } from '../types/ModelType';

class Model {
  minValue: number;
  maxValue: number;
  currentValue: [number];

  constructor({
    minValue,
    maxValue,
    currentValue,
  }: IoptionsModel) {
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
  }

  getMinValue(): number {
    return this.minValue;
  }

  setMinValue(value: number): void {
    this.minValue = value;
  }

  getMaxValue(): number {
    return this.maxValue;
  }

  setMaxValue(value: number): void {
    this.maxValue = value;
  }

  getCurrentValue(): number {
    return this.currentValue[0];
  }

  setCurrentValue(value: number): void {
    if (value < this.minValue || value > this.maxValue) return;
    this.currentValue[0] = value;
  }
}

export {
  Model,
};
