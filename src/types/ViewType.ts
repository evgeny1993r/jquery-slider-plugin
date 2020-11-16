interface IoptionsView {
  $this: JQuery
  minValue: number
  maxValue: number
  currentValue: [number]
}

interface ISlider {
  getSlider(): JQuery
}

interface IScale {
  getScale(): JQuery
}

interface IProgressBar {
  getProgressBar(): JQuery
  updataWidthProgressBar(value: number): void
}

interface IRunner {
  getRunner(): JQuery
  updataPositionRunner(value: number): void
}

export {
  IoptionsView,
  ISlider,
  IScale,
  IProgressBar,
  IRunner,
};