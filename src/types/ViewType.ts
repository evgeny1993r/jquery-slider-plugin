interface IoptionsView {
  $this: JQuery
  position: string
  minValue: number
  maxValue: number
  currentValue: [number]
  step: number
  isShowValueWindow: boolean;
  $inputElement: JQuery
  symbol: string
}

interface ISlider {
  getSlider(): JQuery
}

interface IScale {
  getScale(): JQuery
}

interface IProgressBar {
  getProgressBar(): JQuery
  renderProgressBar(widthValue: number, indentValue: number): void
}

interface IRunner {
  getRunner(): JQuery
  updatePositionRunner(value: number): void
}

interface IValueWindow {
  getValueWindow(): JQuery
  renderValueWindow(currentValue: number, indentValue: number): void
}

export {
  IoptionsView,
  ISlider,
  IScale,
  IProgressBar,
  IRunner,
  IValueWindow,
};
