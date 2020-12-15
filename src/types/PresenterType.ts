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
  setPosition(value: string): void
  getMinValue(): number
  setMinValue(minValue: number): void
  getMaxValue(): number
  setMaxValue(maxValue: number): void
  getCurrentValue(): number
  setCurrentValue(value: number): void
  getCurrentValueMin(): number
  setCurrentValueMin(value: number): void
  getCurrentValueMax(): number
  setCurrentValueMax(value: number): void
  getStep(): number
  setStep(value: number): void
  getIsShowValueWindow(): boolean
  setIsShowValueWindow(value: boolean): void
}

interface IView {
  updatePosition(position: string): void
  updateMinValue(minValue: number): void
  updateMaxValue(maxValue: number): void
  updateCurrentValue(value: number): void
  updateCurrentValueMin(value: number): void
  updateCurrentValueMax(value: number): void
  updateStep(step: number): void
}

export {
  Ioptions,
  IModel,
  IView,
};
