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
  getMinValue(): number
  setMaxValue(maxValue: number): void
  getMaxValue(): number
  setCurrentValue(currentValue: number): void
  setCurrentValueMin(currentValueMin: number): void
  setCurrentValueMax(currentValueMax: number): void
  getCurrentValue(): [number, number?]
  setStep(step: number): void
  getStep(): number
  setIsShowValueWindow(isShowValueWindow: boolean): void
  setIsShowScaleValues(isShowScaleValues: boolean): void
  getState(): IOptionsModel
}

export {
  IOptionsModel,
  IModel,
};
