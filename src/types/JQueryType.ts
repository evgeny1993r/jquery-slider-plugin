interface JQuery {
  slider(options?: Ioptions): JQuery
}

interface Ioptions {
  $this: JQuery
  position: string
  minValue: number
  maxValue: number
  currentValue: [number]
  step: number
  isShowWindowValue: boolean
  $inputElement: JQuery
}
