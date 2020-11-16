interface JQuery {
  slider(options?: Ioptions): JQuery
}

interface Ioptions {
  $this: JQuery
  minValue: number
  maxValue: number
  currentValue: [number]
}
