interface Ioptions {
  $this: JQuery
  position: string
  minValue: number
  maxValue: number
  currentValue: [number]
  step: number
  isShowValueWindow: boolean
  $inputElement: JQuery
  symbol: string
}

interface IModel {
  getCurrentValue(): number
  setCurrentValue(value: number): void
  getCurrentValueMin(): number
  setCurrentValueMin(value: number): void
  getCurrentValueMax(): number
  setCurrentValueMax(value: number): void
}

interface IView {
  updateCurrentValue(value: number): void
  updateCurrentValueMin(value: number): void
  updateCurrentValueMax(value: number): void
}

export {
  Ioptions,
  IModel,
  IView,
};
