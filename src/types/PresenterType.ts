interface Ioptions {
  $this: JQuery
  minValue: number
  maxValue: number
  currentValue: [number]
}

interface IModel {
  getMinValue(): number
  setMinValue(value: number): void
  getMaxValue(): number
  setMaxValue(value: number): void
  getCurrentValue(): number
  setCurrentValue(value: number): void
}

interface IView {
  updataCurrentValue(value: number): void
}

export {
  Ioptions,
  IModel,
  IView,
};
