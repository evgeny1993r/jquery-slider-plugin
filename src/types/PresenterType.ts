interface Ioptions {
  $this: JQuery
  position: string
  minValue: number
  maxValue: number
  currentValue: [number]
  step: number
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
  updataCurrentValue(value: number): void
  updataCurrentValueMin(value: number): void
  updataCurrentValueMax(value: number): void
}

export {
  Ioptions,
  IModel,
  IView,
};
