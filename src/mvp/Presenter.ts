import { IOptions, IModel, IView } from '../types/PresenterType';

import { Observer } from '../observer/Observer';
import { Model } from './Model';
import { View } from './View';

class Presenter extends Observer {
  $this: JQuery;
  model: IModel;
  view: IView;

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
    this.$this = $this;
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

  init() {
    this.view.subscribe(({ type, value }: {type: String, value: number}) => {
      if (type === 'setCurrentValue') {
        this.handleSliderSetCurrentValue(value);
      }
    });
    this.view.subscribe(({ type, value }: {type: String, value: number}) => {
      if (type === 'setCurrentValueMin') {
        this.handleSliderSetCurrentValueMin(value);
      }
    });
    this.view.subscribe(({ type, value }: {type: String, value: number}) => {
      if (type === 'setCurrentValueMax') {
        this.handleSliderSetCurrentValueMax(value);
      }
    });
    this.subscribe(({ type, value }: { type: string, value: string }) => {
      if (type === 'setOrientation') {
        this.handleSliderSetOrientation(value);
      }
    });
    this.subscribe(({ type, value }: {type: String, value: number }) => {
      if (type === 'setMinValue') {
        this.handleSliderSetMinValue(value);
      }
    });
    this.subscribe(({ type, value }: { type: string, value: number }) => {
      if (type === 'setMaxValue') {
        this.handleSliderSetMaxValue(value);
      }
    });
    this.subscribe(({ type, value }: { type: string, value: number }) => {
      if (type === 'setStep') {
        this.handleSliderSetStep(value);
      }
    });
    this.subscribe(({ type, value }: { type: string, value: boolean }) => {
      if (type === 'setIsShowValueWindow') {
        this.handleSliderSetIsShowValueWindow(value);
      }
    });
    this.subscribe(({ type, value }: { type: String, value: boolean }) => {
      if (type === 'setIsShowScaleValues') {
        this.handleSliderSetIsShowScaleValues(value);
      }
    });

    this.model.subscribe(({ type, value }: { type: string, value: number }) => {
      if (type === 'updateCurrentValue') {
        this.handleSliderUpdateCurrentValue(value);
      }
    });
    this.model.subscribe(({ type, value }: { type: string, value: number }) => {
      if (type === 'updateCurrentValueMin') {
        this.handleSliderUpdateCurrentValueMin(value);
      }
    });
    this.model.subscribe(({ type, value }: { type: string, value: number }) => {
      if (type === 'updateCurrentValueMax') {
        this.handleSliderUpdateCurrentValueMax(value);
      }
    });
    this.model.subscribe(({ type, value }: {type: string, value: string }) => {
      if (type === 'updateOrientation') {
        this.handleSliderUpdateOrientation(value);
      }
    });
    this.model.subscribe(({ type, value }: { type: string, value: number }) => {
      if (type === 'updateMinValue') {
        this.handleSliderUpdateMinValue(value);
      }
    });
    this.model.subscribe(({ type, value }: { type: string, value: number }) => {
      if (type === 'updateMaxValue') {
        this.handleSliderUpdateMaxValue(value);
      }
    });
    this.model.subscribe(({ type, value }: { type: string, value: number }) => {
      if (type === 'updateStep') {
        this.handleSliderUpdateStep(value);
      }
    });
    this.model.subscribe(({ type, value }: { type: String, value: boolean}) => {
      if (type === 'updateIsShowValueWindow') {
        this.handleSliderUpdateIsShowValueWindow(value);
      }
    });
    this.model.subscribe(({ type, value }: { type: string, value: boolean }) => {
      if (type === 'updateIsShowScaleValues') {
        this.handleSliderUpdateIsShowScaleValues(value);
      }
    });
  }

  handleSliderSetCurrentValue(currentValue: number) {
    this.model.setCurrentValue(currentValue);
  }

  handleSliderSetCurrentValueMin(currentValueMin: number) {
    this.model.setCurrentValueMin(currentValueMin);
  }

  handleSliderSetCurrentValueMax(currentValueMax: number) {
    this.model.setCurrentValueMax(currentValueMax);
  }

  handleSliderSetOrientation(orientation: string) {
    this.model.setOrientation(orientation);
  }

  handleSliderSetMinValue(minValue: number) {
    this.model.setMinValue(minValue);
  }

  handleSliderSetMaxValue(maxValue: number) {
    this.model.setMaxValue(maxValue);
  }

  handleSliderSetStep(step: number) {
    this.model.setStep(step);
  }

  handleSliderSetIsShowValueWindow(isShowValueWindow: boolean) {
    this.model.setIsShowValueWindow(isShowValueWindow);
  }

  handleSliderSetIsShowScaleValues(isShowScaleValues: boolean) {
    this.model.setIsShowScaleValues(isShowScaleValues);
  }

  handleSliderUpdateCurrentValue(value: number) {
    this.view.updateCurrentValue(value);
  }

  handleSliderUpdateCurrentValueMin(value: number) {
    this.view.updateCurrentValueMin(value);
  }

  handleSliderUpdateCurrentValueMax(value: number) {
    this.view.updateCurrentValueMax(value);
  }

  handleSliderUpdateOrientation(value: string) {
    this.view.updateOrientation(value);
  }

  handleSliderUpdateMinValue(value: number) {
    this.view.updateMinValue(value);
  }

  handleSliderUpdateMaxValue(value: number) {
    this.view.updateMaxValue(value);
  }

  handleSliderUpdateStep(value: number) {
    this.view.updateStep(value);
  }

  handleSliderUpdateIsShowValueWindow(value: boolean) {
    this.view.updateIsShowValueWindow(value);
  }

  handleSliderUpdateIsShowScaleValues(value: boolean) {
    this.view.updateIsShowScaleValues(value);
  }
}

export {
  Presenter,
};
