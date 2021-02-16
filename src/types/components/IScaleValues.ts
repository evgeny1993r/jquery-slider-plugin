import { IObserver } from '../observer/IObserver';

interface IScaleValues extends IObserver {
  getScaleValues(): JQuery
  updatePositionScaleValues(scaleSize: number): void
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
  updateMinMaxValues(minValue: number, maxValue: number): void
  updateStep(step: number): void
}

export {
  IScaleValues,
};
