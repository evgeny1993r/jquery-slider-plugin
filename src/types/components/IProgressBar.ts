import { IObserver } from '../observer/IObserver';

interface IProgressBar extends IObserver {
  getProgressBar(): JQuery
  renderProgressBar(widthValue: number, indentValue: number): void
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
}

export {
  IProgressBar,
};
