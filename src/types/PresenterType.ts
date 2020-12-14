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
  updateCurrentValue(value: number): void
  updateCurrentValueMin(value: number): void
  updateCurrentValueMax(value: number): void
  updatePosition(position: string): void
}

export {
  Ioptions,
  IModel,
  IView,
};
