interface IPresenterOptions {
  $this: JQuery
  currentValue: [number, number?]
  orientation: 'horizontal' | 'vertical'
  minValue: number
  maxValue: number
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
}

interface IPresenter {
  setCurrentValue: (value: number) => void
  setCurrentValueMin: (value: number) => void
  setCurrentValueMax: (value: number) => void
  setOrientation(value: 'horizontal' | 'vertical'): void
  setMinValue(value: number): void
  setMaxValue(value: number): void
  setStep(value: number): void
  setIsShowValueWindow(value: boolean): void
  setIsShowScaleValues(value: boolean): void
}

export {
  IPresenterOptions,
  IPresenter,
};
