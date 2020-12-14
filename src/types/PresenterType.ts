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
  updatePosition(position: string): void
}

export {
  Ioptions,
  IModel,
  IView,
};
