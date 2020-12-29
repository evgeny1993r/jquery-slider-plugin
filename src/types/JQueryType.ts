interface JQuery {
  slider(key?: Ioptions | string, value?: string | number | [number, number]): JQuery
}

interface Ioptions {
  $this?: JQuery
  position?: string
  minValue?: number
  maxValue?: number
  currentValue?: [number]
  step?: number
  isShowWindowValue?: boolean
}
