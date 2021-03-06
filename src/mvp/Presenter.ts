import { Observer } from '../observer/Observer';
import { Model } from './Model';
import { View } from './View';

interface IParameters {
  $this: JQuery;
  orientation: 'horizontal' | 'vertical';
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];
  step: number;
  isShowValueWindow: boolean;
  isShowScaleValues: boolean;
}

class Presenter extends Observer<null> {
  private $this: JQuery;
  private model: Model;
  private view: View;

  constructor({
    $this,
    orientation,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
    isShowScaleValues,
  }: IParameters) {
    super();
    this.model = new Model({
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
    this.$this = $this;

    this.init();
  }

  private init() {
    this.model.subscribe((data) => {
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
      }
    });

    this.view.subscribe((data) => {
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
      }
    });
  }

  public setCurrentValue(value: number) {
    this.model.setCurrentValue(value);
    this.$this.trigger('updateCurrentValue', { currentValue: this.model.getCurrentValue() });
  }

  private updateCurrentValue(value: number) {
    this.view.updateCurrentValue(value);
  }

  public setCurrentValueMin(value: number) {
    this.model.setCurrentValueMin(value);
    this.$this.trigger('updateCurrentValue', { currentValue: this.model.getCurrentValue() });
  }

  private updateCurrentValueMin(value: number) {
    this.view.updateCurrentValueMin(value);
  }

  public setCurrentValueMax(value: number) {
    this.model.setCurrentValueMax(value);
    this.$this.trigger('updateCurrentValue', { currentValue: this.model.getCurrentValue() });
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
    this.$this.trigger('updateMinValue', { minValue: this.model.getMinValue() });
  }

  private updateMinValue(value: number) {
    this.view.updateMinValue(value);
  }

  public setMaxValue(value: number) {
    this.model.setMaxValue(value);
    this.$this.trigger('updateMaxValue', { maxValue: this.model.getMaxValue() });
  }

  private updateMaxValue(value: number) {
    this.view.updateMaxValue(value);
  }

  public setStep(value: number) {
    this.model.setStep(value);
    this.$this.trigger('updateStep', { step: this.model.getStep() });
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

  public getState() {
    return {
      model: this.model,
      view: this.view,
    };
  }
}

export {
  Presenter,
};
