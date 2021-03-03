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
  getMinValue(): number
  setMinValue(minValue: number): void
  getMaxValue(): number
  setMaxValue(maxValue: number): void
  getCurrentValue(): [number, number?]
  setCurrentValue(currentValue: number): void
  setCurrentValueMin(currentValueMin: number): void
  setCurrentValueMax(currentValueMax: number): void
  getStep(): number
  setStep(step: number): void
  setIsShowValueWindow(isShowValueWindow: boolean): void
  setIsShowScaleValues(isShowScaleValues: boolean): void
  getState(value: string): number | 'horizontal' | 'vertical' | boolean
}

export {
  IOptionsModel,
  IModel,
};
