interface IOptionsModel {
  $this: JQuery
  orientation: string
  minValue: number
  maxValue: number
  currentValue: [number, number?]
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
}

export {
  IOptionsModel,
};
