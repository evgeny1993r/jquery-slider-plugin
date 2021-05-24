import { IObserver } from '../observer/IObserver';

interface IOptionsView {
  $this: JQuery
  orientation: 'horizontal' | 'vertical'
  minValue: number
  maxValue: number
  currentValue: [number, number?]
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
}

interface IView extends IObserver {
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
  updateMinValue(minValue: number): void
  updateMaxValue(maxValue: number): void
  updateCurrentValue(currentValue: number): void
  updateCurrentValueMin(currentValueMin: number): void
  updateCurrentValueMax(currentValueMax: number): void
  updateStep(step: number): void
  updateIsShowValueWindow(isShowValueWindow: boolean): void
  updateIsShowScaleValues(isShowScaleValues: boolean): void
  getState(): any
}

export {
  IOptionsView,
  IView,
};
