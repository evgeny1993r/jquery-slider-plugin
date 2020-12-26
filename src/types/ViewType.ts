interface IoptionsView {
  $this: JQuery
  position: string
  minValue: number
  maxValue: number
  currentValue: [number]
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
  $inputElement: JQuery
}

interface ISlider {
  getSlider(): JQuery
}

interface IScale {
  getScale(): JQuery
  updatePosition(position: string): void
}

interface IProgressBar {
  getProgressBar(): JQuery
  renderProgressBar(widthValue: number, indentValue: number): void
  updatePosition(position: string): void
}

interface IRunner {
  getRunner(): JQuery
  updatePositionRunner(value: number): void
  updatePosition(position: string): void
}

interface IValueWindow {
  getValueWindow(): JQuery
  renderValueWindow(currentValue: number, indentValue: number): void
  updatePosition(position: string): void
}

interface IScaleValues {
  getScaleValues(): JQuery
  updatePositionScaleValues(scaleSize: number): void
  updatePosition(position: string): void
  updateMinMaxValues(minValue: number, maxValue: number): void
  updateStep(step: number): void
}

export {
  IoptionsView,
  ISlider,
  IScale,
  IProgressBar,
  IRunner,
  IValueWindow,
  IScaleValues,
};
