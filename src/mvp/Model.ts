import { IoptionsModel } from '../types/ModelType';

class Model {
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];

  constructor({
    minValue,
    maxValue,
    currentValue,
  }: IoptionsModel) {
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
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
}

export {
  Model,
};
