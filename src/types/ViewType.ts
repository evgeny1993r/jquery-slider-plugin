import { IObserver } from './ObserverTypes';

interface IOptionsView {
  $this: JQuery
  orientation: string
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

interface IScale extends IObserver {
  getScale(): JQuery
  updateOrientation(orientation: string): void
}

interface IProgressBar extends IObserver {
  getProgressBar(): JQuery
  renderProgressBar(widthValue: number, indentValue: number): void
  updateOrientation(orientation: string): void
}

interface IRunner extends IObserver {
  getRunner(): JQuery
  updatePositionRunner(value: number): void
  updateOrientation(orientation: string): void
}

interface IValueWindow {
  getValueWindow(): JQuery
  renderValueWindow(currentValue: number, indentValue: number): void
  updateOrientation(orientation: string): void
}

interface IScaleValues extends IObserver {
  getScaleValues(): JQuery
  updatePositionScaleValues(scaleSize: number): void
  updateOrientation(orientation: string): void
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
