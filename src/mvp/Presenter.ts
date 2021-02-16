import { Observer } from '../observer/Observer';
import { Model } from './Model';
import { View } from './View';

import { IPresenterOptions } from '../types/mvp/IPresenter';
import { IModel } from '../types/mvp/IModel';
import { IView } from '../types/mvp/IView';
import { SetModel } from '../types/observer/setModel';
import { UpdateView } from '../types/observer/updateView';

class Presenter extends Observer {
  private model: IModel;
  private view: IView;

  constructor({
    $this,
    orientation,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
    isShowScaleValues,
  }: IPresenterOptions) {
    super();
    this.model = new Model({
      $this,
      orientation,
      minValue,
      maxValue,
      currentValue,
      step,
      isShowValueWindow,
      isShowScaleValues,
    });
    this.view = new View({
      $this,
      orientation,
      minValue,
      maxValue,
      currentValue,
      step,
      isShowValueWindow,
      isShowScaleValues,
    });

    this.init();
  }

  private init() {
    this.model.subscribe((data: SetModel) => {
      switch (data.type) {
        case 'updateCurrentValue':
          this.updateCurrentValue(data.value);
          break;
        case 'updateCurrentValueMin':
          this.updateCurrentValueMin(data.value);
          break;
        case 'updateCurrentValueMax':
          this.updateCurrentValueMax(data.value);
          break;
        case 'updateOrientation':
          this.updateOrientation(data.value);
          break;
        case 'updateMinValue':
          this.updateMinValue(data.value);
          break;
        case 'updateMaxValue':
          this.updateMaxValue(data.value);
          break;
        case 'updateStep':
          this.updateStep(data.value);
          break;
        case 'updateIsShowValueWindow':
          this.updateIsShowValueWindow(data.value);
          break;
        case 'updateIsShowScaleValues':
          this.updateIsShowScaleValues(data.value);
          break;
        default:
      }
    });

    this.view.subscribe((data: UpdateView) => {
      switch (data.type) {
        case 'setCurrentValue':
          this.setCurrentValue(data.value);
          break;
        case 'setCurrentValueMin':
          this.setCurrentValueMin(data.value);
          break;
        case 'setCurrentValueMax':
          this.setCurrentValueMax(data.value);
          break;
        default:
      }
    });
  }

  public setCurrentValue(value: number) {
    this.model.setCurrentValue(value);
  }

  private updateCurrentValue(value: number) {
    this.view.updateCurrentValue(value);
  }

  public setCurrentValueMin(value: number) {
    this.model.setCurrentValueMin(value);
  }

  private updateCurrentValueMin(value: number) {
    this.view.updateCurrentValueMin(value);
  }

  public setCurrentValueMax(value: number) {
    this.model.setCurrentValueMax(value);
  }

  private updateCurrentValueMax(value: number) {
    this.view.updateCurrentValueMax(value);
  }

  public setOrientation(value: 'horizontal' | 'vertical') {
    this.model.setOrientation(value);
  }

  private updateOrientation(value: 'horizontal' | 'vertical') {
    this.view.updateOrientation(value);
  }

  public setMinValue(value: number) {
    this.model.setMinValue(value);
  }

  private updateMinValue(value: number) {
    this.view.updateMinValue(value);
  }

  public setMaxValue(value: number) {
    this.model.setMaxValue(value);
  }

  private updateMaxValue(value: number) {
    this.view.updateMaxValue(value);
  }

  public setStep(value: number) {
    this.model.setStep(value);
  }

  private updateStep(value: number) {
    this.view.updateStep(value);
  }

  public setIsShowValueWindow(value: boolean) {
    this.model.setIsShowValueWindow(value);
  }

  private updateIsShowValueWindow(value: boolean) {
    this.view.updateIsShowValueWindow(value);
  }

  public setIsShowScaleValues(value: boolean) {
    this.model.setIsShowScaleValues(value);
  }

  private updateIsShowScaleValues(value: boolean) {
    this.view.updateIsShowScaleValues(value);
  }
}

export {
  Presenter,
};
