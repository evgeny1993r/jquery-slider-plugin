import './panel-configuration.scss';
import '../slider-plugin/slider-plugin';
import '../slider-plugin/slider-plugin.css';

class PanelConfiguration {
  $this: JQuery;
  $radioButtonsOrientationHorizontal: JQuery;
  $radioButtonsOrientationHorizontalInput: JQuery;
  $radioButtonsOrientationVertical: JQuery;
  $radioButtonsOrientationVerticalInput: JQuery;
  $textFieldCurrentValueInput: JQuery;
  $textFieldMinValueInput: JQuery;
  $textFieldMaxValueInput: JQuery;
  $textFieldStepInput: JQuery;
  $toggleIsShowValueWindowInput: JQuery;
  $toggleIsShowScaleValuesInput: JQuery;
  $slider: JQuery;

  orientation: 'horizontal' | 'vertical';
  currentValue: [number, number?];
  minValue: number;
  maxValue: number;
  step: number;
  isShowValueWindow: boolean;
  isShowScaleValues: boolean;

  constructor(el: HTMLElement) {
    this.$this = $(el);
    this.$radioButtonsOrientationHorizontal = $(this.$this.find('.radio-buttons__label')[0]);
    this.$radioButtonsOrientationHorizontalInput = this.$radioButtonsOrientationHorizontal.find('.radio-buttons__input');
    this.$radioButtonsOrientationVertical = $(this.$this.find('.radio-buttons__label')[1]);
    this.$radioButtonsOrientationVerticalInput = this.$radioButtonsOrientationVertical.find('.radio-buttons__input');
    this.$textFieldCurrentValueInput = $(this.$this.find('.text-field')[0]).find('.text-field__input');
    this.$textFieldMinValueInput = $(this.$this.find('.text-field')[1]).find('.text-field__input');
    this.$textFieldMaxValueInput = $(this.$this.find('.text-field')[2]).find('.text-field__input');
    this.$textFieldStepInput = $(this.$this.find('.text-field')[3]).find('.text-field__input');
    this.$toggleIsShowValueWindowInput = $(this.$this.find('.toggle')[0]).find('.toggle__input');
    this.$toggleIsShowScaleValuesInput = $(this.$this.find('.toggle')[1]).find('.toggle__input');
    this.$slider = this.$this.find('.panel-configuration__slider');

    this.orientation = this.$this.data('orientation');
    this.currentValue = this.$this.data('currentValue');
    this.minValue = this.$this.data('min-value');
    this.maxValue = this.$this.data('max-value');
    this.step = this.$this.data('step');
    this.isShowValueWindow = this.$this.data('is-show-value-window');
    this.isShowScaleValues = this.$this.data('is-show-scale-values');

    this.setOrientation();
    this.setCurrentValue(this.currentValue);
    this.setMinValue(this.minValue);
    this.setMaxValue(this.maxValue);
    this.setStep(this.step);
    this.setIsShowValueWindow();
    this.setIsShowScaleValues();

    this.$slider.slider({
      orientation: this.orientation,
      currentValue: this.currentValue,
      minValue: this.minValue,
      maxValue: this.maxValue,
      step: this.step,
      isShowValueWindow: this.isShowValueWindow,
      isShowScaleValues: this.isShowScaleValues,
    });

    this.$slider.on('updateCurrentValue', (_, { currentValue }) => this.setCurrentValue(currentValue));
    this.$slider.on('updateMinValue', (_, { minValue }) => this.setMinValue(minValue));
    this.$slider.on('updateMaxValue', (_, { maxValue }) => this.setMaxValue(maxValue));
    this.$slider.on('updateStep', (_, { step }) => this.setStep(step));

    this.$radioButtonsOrientationHorizontal.on('click', () => this.handleRadioButtonsOrientationHorizontalClick());
    this.$radioButtonsOrientationVertical.on('click', () => this.handleRadioButtonsOrientationVerticalClick());
    this.$textFieldCurrentValueInput.on('change', (e) => this.handleTextFieldCurrentValueInputChange(e));
    this.$textFieldMinValueInput.on('change', (e) => this.handleTextFieldMinValueInputChange(e));
    this.$textFieldMaxValueInput.on('change', (e) => this.handleTextFieldMaxValueInputChange(e));
    this.$textFieldStepInput.on('change', (e) => this.handleTextFieldStepInput(e));
    this.$toggleIsShowValueWindowInput.on('click', () => this.handleToggleIsShowValueWindowButtonClick());
    this.$toggleIsShowScaleValuesInput.on('click', () => this.handleToggleIsShowScaleValuesClick());
  }

  setOrientation(): void {
    if (this.orientation === 'horizontal') {
      this.$radioButtonsOrientationHorizontalInput.prop('checked', true);
      this.$radioButtonsOrientationVerticalInput.prop('checked', false);
    } else if (this.orientation === 'vertical') {
      this.$radioButtonsOrientationVerticalInput.prop('checked', true);
      this.$radioButtonsOrientationHorizontalInput.prop('checked', false);
    }
  }

  setCurrentValue(currentValue: [number, number?]): void {
    if (currentValue.length === 1) {
      this.$textFieldCurrentValueInput.val(currentValue[0]);
    } else if (currentValue.length === 2) {
      this.$textFieldCurrentValueInput.val(`${currentValue[0]} - ${currentValue[1]}`);
    }
  }

  setMinValue(minValue: number) {
    this.$textFieldMinValueInput.val(minValue);
  }

  setMaxValue(maxValue: number) {
    this.$textFieldMaxValueInput.val(maxValue);
  }

  setStep(step: number) {
    this.$textFieldStepInput.val(step);
  }

  setIsShowValueWindow() {
    if (this.isShowValueWindow) {
      this.$toggleIsShowValueWindowInput.prop('checked', true);
    } else if (!this.isShowValueWindow) {
      this.$toggleIsShowValueWindowInput.prop('checked', false);
    }
  }

  setIsShowScaleValues() {
    if (this.isShowScaleValues) {
      this.$toggleIsShowScaleValuesInput.prop('checked', true);
    } else if (!this.isShowScaleValues) {
      this.$toggleIsShowScaleValuesInput.prop('checked', false);
    }
  }

  handleRadioButtonsOrientationHorizontalClick(): void {
    if (this.orientation === 'vertical') {
      this.$slider.slider('setOrientation', 'horizontal');
      this.orientation = 'horizontal';
      this.setOrientation();
    }
  }

  handleRadioButtonsOrientationVerticalClick(): void {
    if (this.orientation === 'horizontal') {
      this.$slider.slider('setOrientation', 'vertical');
      this.orientation = 'vertical';
      this.setOrientation();
    }
  }

  handleTextFieldCurrentValueInputChange(e: JQuery.ChangeEvent) {
    const text = e.currentTarget.value.split(' - ');
    if (text.length === 1) {
      this.$slider.slider('setCurrentValue', [Number(text[0])]);
    } else if (text.length === 2) {
      this.$slider.slider('setCurrentValue', [Number(text[0]), Number(text[1])]);
    }
  }

  handleTextFieldMinValueInputChange(e: JQuery.ChangeEvent) {
    this.$slider.slider('setMinValue', Number(e.currentTarget.value));
  }

  handleTextFieldMaxValueInputChange(e: JQuery.ChangeEvent) {
    this.$slider.slider('setMaxValue', Number(e.currentTarget.value));
  }

  handleTextFieldStepInput(e: JQuery.ChangeEvent) {
    this.$slider.slider('setStep', Number(e.currentTarget.value));
  }

  handleToggleIsShowValueWindowButtonClick() {
    if (this.isShowValueWindow) {
      this.isShowValueWindow = false;
      this.$slider.slider('setIsShowValueWindow', false);
    } else if (!this.isShowValueWindow) {
      this.isShowValueWindow = true;
      this.$slider.slider('setIsShowValueWindow', true);
    }
  }

  handleToggleIsShowScaleValuesClick() {
    if (this.isShowScaleValues) {
      this.isShowScaleValues = false;
      this.$slider.slider('setIsShowScaleValues', false);
    } else if (!this.isShowScaleValues) {
      this.isShowScaleValues = true;
      this.$slider.slider('setIsShowScaleValues', true);
    }
  }
}

export {
  PanelConfiguration,
};
