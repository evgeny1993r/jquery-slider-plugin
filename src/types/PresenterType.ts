interface Ioptions {
  $this: JQuery
  position: string
  minValue: number
  maxValue: number
  currentValue: [number]
  step: number
  isShowValueWindow: boolean
  $inputElement: JQuery
}

interface IModel {
  getPosition(): string
  setPosition(position: string): void
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
}

interface IView {
  updatePosition(position: string): void
  updateMinValue(minValue: number): void
  updateMaxValue(maxValue: number): void
  updateCurrentValue(currentValue: number): void
  updateCurrentValueMin(currentValueMin: number): void
  updateCurrentValueMax(currentValueMax: number): void
  updateStep(step: number): void
  updateIsShowValueWindow(isShowValueWindow: boolean): void
}

export {
  Ioptions,
  IModel,
  IView,
};
