import { Observer } from '../observer/Observer';
import { ISetModel } from '../types/observer/ISetModel';

interface IParameters {
  orientation: 'horizontal' | 'vertical';
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];
  step: number;
  isShowValueWindow: boolean;
  isShowScaleValues: boolean;
}

class Model extends Observer<ISetModel> {
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
  }: IParameters) {
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
    const isValidCurrentValue = currentValue >= this.minValue
      && currentValue <= this.maxValue;
    if (isValidCurrentValue) {
      if (currentValue === this.minValue || currentValue === this.maxValue) {
        this.currentValue[0] = currentValue;
      } else {
        this.currentValue[0] = Math.round(currentValue / this.step) * this.step;
      }
      this.broadcast({ type: 'updateCurrentValue', value: this.currentValue[0] });
      if (this.currentValue.length === 2) {
        this.currentValue.splice(1, 1);
      }
    }
  }

  public setCurrentValueMin(currentValueMin: number): void {
    if (this.currentValue.length === 1) {
      const isValidCurrentValueMin = currentValueMin >= this.minValue
        && currentValueMin <= this.maxValue;
      if (isValidCurrentValueMin) {
        if (currentValueMin === this.minValue) {
          this.currentValue[0] = currentValueMin;
        } else {
          this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
        }
        this.broadcast({ type: 'updateCurrentValueMin', value: this.currentValue[0] });
      }
    }
    if (this.currentValue.length === 2) {
      const isValidCurrentValueMin = currentValueMin >= this.minValue
        && currentValueMin <= this.currentValue[1];
      if (isValidCurrentValueMin) {
        if (currentValueMin === this.minValue) {
          this.currentValue[0] = currentValueMin;
        } else {
          this.currentValue[0] = Math.round(currentValueMin / this.step) * this.step;
        }
        this.broadcast({ type: 'updateCurrentValueMin', value: this.currentValue[0] });
      }
    }
  }

  public setCurrentValueMax(currentValueMax: number): void {
    const isValidCurrentValueMax = currentValueMax > this.currentValue[0]
    && currentValueMax <= this.maxValue;
    if (isValidCurrentValueMax) {
      if (currentValueMax === this.maxValue) {
        this.currentValue[1] = currentValueMax;
      } else {
        this.currentValue[1] = Math.round(currentValueMax / this.step) * this.step;
      }
      this.broadcast({ type: 'updateCurrentValueMax', value: this.currentValue[1] });
    }
  }

  public getCurrentValue(): [number, number?] {
    return this.currentValue;
  }

  public setOrientation(orientation: 'horizontal' | 'vertical'): void {
    this.orientation = orientation;
    this.broadcast({ type: 'updateOrientation', value: this.orientation });
  }

  public setMinValue(minValue: number): void {
    if (minValue < this.currentValue[0]) {
      this.minValue = minValue;
      this.broadcast({ type: 'updateMinValue', value: this.minValue });
    }
  }

  public getMinValue(): number {
    return this.minValue;
  }

  public setMaxValue(maxValue: number): void {
    if (this.currentValue.length === 1) {
      if (maxValue > this.currentValue[0]) {
        this.maxValue = maxValue;
        this.broadcast({ type: 'updateMaxValue', value: this.maxValue });
      }
    }
    if (this.currentValue.length === 2) {
      if (maxValue > this.currentValue[1]) {
        this.maxValue = maxValue;
        this.broadcast({ type: 'updateMaxValue', value: this.maxValue });
      }
    }
  }

  public getMaxValue(): number {
    return this.maxValue;
  }

  public setStep(step: number): void {
    if (step < (this.maxValue - this.minValue) / 10) {
      this.step = step;
      this.broadcast({ type: 'updateStep', value: this.step });
    }
  }

  public getStep(): number {
    return this.step;
  }

  public setIsShowValueWindow(isShowValueWindow: boolean): void {
    this.isShowValueWindow = isShowValueWindow;
    this.broadcast({ type: 'updateIsShowValueWindow', value: this.isShowValueWindow });
  }

  public setIsShowScaleValues(isShowScaleValues: boolean) {
    this.isShowScaleValues = isShowScaleValues;
    this.broadcast({ type: 'updateIsShowScaleValues', value: this.isShowScaleValues });
  }

  public getState() {
    return {
      orientation: this.orientation,
      minValue: this.minValue,
      maxValue: this.maxValue,
      currentValue: this.currentValue,
      step: this.step,
      isShowValueWindow: this.isShowValueWindow,
      isShowScaleValues: this.isShowScaleValues,
    };
  }
}

export {
  Model,
};
