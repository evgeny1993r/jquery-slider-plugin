interface JQuery {
  slider(key?: IOptions | string, value?: string | number | [number, number]): JQuery
}

interface IOptions {
  $this?: JQuery
  orientation?: string
  minValue?: number
  maxValue?: number
  currentValue?: [number]
  step?: number
  isShowWindowValue?: boolean
  isShowScaleValues?: boolean
}
