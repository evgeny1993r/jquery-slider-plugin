import { IObserver } from '../observer/IObserver';

interface IScale extends IObserver {
  getScale(): JQuery
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
}

export {
  IScale,
};
