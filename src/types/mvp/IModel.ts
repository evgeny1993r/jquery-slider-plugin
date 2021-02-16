import { IObserver } from '../observer/IObserver';

interface IOptionsModel {
  $this: JQuery
  orientation: 'horizontal' | 'vertical'
  minValue: number
  maxValue: number
  currentValue: [number, number?]
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
}

interface IModel extends IObserver {
  getOrientation(): 'horizontal' | 'vertical'
  setOrientation(orientation: 'horizontal' | 'vertical'): void
  getMinValue(): number
  setMinValue(minValue: number): void
  getMaxValue(): number
  setMaxValue(maxValue: number): void
  getCurrentValue(): number
  setCurrentValue(currentValue: number): void
  getCurrentValueMin(): number
  setCurrentValueMin(currentValueMin: number): void
  getCurrentValueMax(): number
  setCurrentValueMax(currentValueMax: number): void
  getStep(): number
  setStep(step: number): void
  getIsShowValueWindow(): boolean
  setIsShowValueWindow(isShowValueWindow: boolean): void
  getIsShowScaleValues(): boolean
  setIsShowScaleValues(isShowScaleValues: boolean): void
}

export {
  IOptionsModel,
  IModel,
};
