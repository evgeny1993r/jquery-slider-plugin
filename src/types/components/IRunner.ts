import { IObserver } from '../observer/IObserver';

interface IRunner extends IObserver {
  getRunner(): JQuery
  updatePositionRunner(value: number): void
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
}

export {
  IRunner,
};
