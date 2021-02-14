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
    this.model.subscribe(({ type, value }: { type: String, value: number | string }) => {
      if (typeof (value) === 'number') {
        switch (type) {
          case 'updateCurrentValue':
            this.view.updateCurrentValue(value);
            break;
          case 'updateCurrentValueMin':
            this.view.updateCurrentValueMin(value);
            break;
          case 'updateCurrentValueMax':
            this.view.updateCurrentValueMax(value);
            break;
          case 'updateMinValue':
            this.view.updateMinValue(value);
            break;
          case 'updateMaxValue':
            this.view.updateMaxValue(value);
            break;
          case 'updateStep':
            this.view.updateStep(value);
            break;
          default:
        }
      } else if (typeof (value) === 'string') {
        switch (type) {
          case 'updateOrientation':
            this.view.updateOrientation(value);
            break;
          default:
        }
      } else if (typeof (value) === 'boolean') {
        switch (type) {
          case 'updateIsShowValueWindow':
            this.view.updateIsShowValueWindow(value);
            break;
          case 'updateIsShowScaleValues':
            this.view.updateIsShowScaleValues(value);
            break;
          default:
        }
      }
    });

    this.view.subscribe(({ type, value }: { type: string, value: number }) => {
      switch (type) {
        case 'setCurrentValue':
          this.model.setCurrentValue(value);
          break;
        case 'setCurrentValueMin':
          this.model.setCurrentValueMin(value);
          break;
        case 'setCurrentValueMax':
          this.model.setCurrentValueMax(value);
          break;
        default:
      }
    });

    this.subscribe(({ type, value }: { type: String, value: number | string }) => {
      if (typeof (value) === 'number') {
        switch (type) {
          case 'setCurrentValue':
            this.model.setCurrentValue(value);
            break;
          case 'setCurrentValueMin':
            this.model.setCurrentValueMin(value);
            break;
          case 'setCurrentValueMax':
            this.model.setCurrentValueMax(value);
            break;
          case 'setMinValue':
            this.model.setMinValue(value);
            break;
          case 'setMaxValue':
            this.model.setMaxValue(value);
            break;
          case 'setStep':
            this.model.setStep(value);
            break;
          default:
        }
      } else if (typeof (value) === 'string') {
        switch (type) {
          case 'setOrientation':
            this.model.setOrientation(value);
            break;
          default:
        }
      } else if (typeof (value) === 'boolean') {
        switch (type) {
          case 'setIsShowValueWindow':
            this.model.setIsShowValueWindow(value);
            break;
          case 'setIsShowScaleValues':
            this.model.setIsShowScaleValues(value);
            break;
          default:
        }
      }
    });
  }
}

export {
  Presenter,
};
