interface IOptions {
  $this: JQuery
  orientation: 'horizontal' | 'vertical'
  minValue: number
  maxValue: number
  currentValue: [number]
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
}

interface IModel {
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

interface IView {
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
  updateMinValue(minValue: number): void
  updateMaxValue(maxValue: number): void
  updateCurrentValue(currentValue: number): void
  updateCurrentValueMin(currentValueMin: number): void
  updateCurrentValueMax(currentValueMax: number): void
  updateStep(step: number): void
  updateIsShowValueWindow(isShowValueWindow: boolean): void
  updateIsShowScaleValues(isShowScaleValues: boolean): void
}

export {
  IOptions,
  IModel,
  IView,
};
