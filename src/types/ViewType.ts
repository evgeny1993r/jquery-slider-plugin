interface IOptionsView {
  $this: JQuery
  orientation: 'horizontal' | 'vertical'
  minValue: number
  maxValue: number
  currentValue: [number, number?]
  step: number
  isShowValueWindow: boolean
  isShowScaleValues: boolean
}

interface ISlider {
  getSlider(): JQuery
}

interface IScale {
  getScale(): JQuery
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
}

interface IProgressBar {
  getProgressBar(): JQuery
  renderProgressBar(widthValue: number, indentValue: number): void
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
}

interface IRunner {
  getRunner(): JQuery
  updatePositionRunner(value: number): void
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
}

interface IValueWindow {
  getValueWindow(): JQuery
  renderValueWindow(currentValue: number, indentValue: number): void
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
}

interface IScaleValues {
  getScaleValues(): JQuery
  updatePositionScaleValues(scaleSize: number): void
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
  updateMinMaxValues(minValue: number, maxValue: number): void
  updateStep(step: number): void
}

export {
  IOptionsView,
  ISlider,
  IScale,
  IProgressBar,
  IRunner,
  IValueWindow,
  IScaleValues,
};
