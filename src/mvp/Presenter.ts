import { IOptions, IModel, IView } from '../types/PresenterType';

import { Observer } from '../observer/Observer';
import { Model } from './Model';
import { View } from './View';

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
  }: IOptions) {
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
    this.model.subscribe(({ type, value }: { type: string, value: number | string }) => {
      if (typeof (value) === 'number') {
        switch (type) {
          case 'updateCurrentValue':
            this.updateCurrentValue(value);
            break;
          case 'updateCurrentValueMin':
            this.updateCurrentValueMin(value);
            break;
          case 'updateCurrentValueMax':
            this.updateCurrentValueMax(value);
            break;
          case 'updateMinValue':
            this.updateMinValue(value);
            break;
          case 'updateMaxValue':
            this.updateMaxValue(value);
            break;
          case 'updateStep':
            this.updateStep(value);
            break;
          default:
        }
      } else if (typeof (value) === 'string') {
        switch (type) {
          case 'updateOrientation':
            this.updateOrientation(value);
            break;
          default:
        }
      } else if (typeof (value) === 'boolean') {
        switch (type) {
          case 'updateIsShowValueWindow':
            this.updateIsShowValueWindow(value);
            break;
          case 'updateIsShowScaleValues':
            this.updateIsShowScaleValues(value);
            break;
          default:
        }
      }
    });

    this.view.subscribe(({ type, value }: { type: string, value: number }) => {
      switch (type) {
        case 'setCurrentValue':
          this.setCurrentValue(value);
          break;
        case 'setCurrentValueMin':
          this.setCurrentValueMin(value);
          break;
        case 'setCurrentValueMax':
          this.setCurrentValueMax(value);
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

  public setOrientation(value: string) {
    this.model.setOrientation(value);
  }

  private updateOrientation(value: string) {
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
