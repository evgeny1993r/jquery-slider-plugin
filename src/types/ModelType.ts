interface IoptionsModel {
  position: string
  minValue: number
  maxValue: number
  currentValue: [number, number?]
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
}

export {
  IoptionsModel,
};
