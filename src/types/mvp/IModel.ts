import { IObserver } from '../observer/IObserver';

interface IOptionsModel {
  orientation: 'horizontal' | 'vertical'
  minValue: number
  maxValue: number
  currentValue: [number, number?]
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
}

interface IModel extends IObserver {
  setOrientation(orientation: 'horizontal' | 'vertical'): void
  setMinValue(minValue: number): void
  setMaxValue(maxValue: number): void
  setCurrentValue(currentValue: number): void
  setCurrentValueMin(currentValueMin: number): void
  setCurrentValueMax(currentValueMax: number): void
  setStep(step: number): void
  setIsShowValueWindow(isShowValueWindow: boolean): void
  setIsShowScaleValues(isShowScaleValues: boolean): void
  getState(value: string): number | 'horizontal' | 'vertical'
}

export {
  IOptionsModel,
  IModel,
};
