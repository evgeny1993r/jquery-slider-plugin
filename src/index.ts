import { Presenter } from './mvp/Presenter';

(function ($) {
  $.fn.slider = function (key, value) {
    this.presenter;
    this.init = ($this: JQuery, options?: IOptions) => {
      const settings = $.extend({
        $this,
        orientation: 'horizontal',
        minValue: 0,
        maxValue: 100,
        currentValue: [0],
        step: 1,
        isShowValueWindow: false,
        isShowScaleValues: false,
      }, options);

      return new Presenter(settings);
    };

    this.isValidSetCurrentValue = (
      val: number | [number, number?] | 'horizontal' | 'vertical' | boolean,
    ): val is [number, number?] => (
      (Array.isArray(val)
      && typeof (val[0]) === 'number')
      || (Array.isArray(val)
      && typeof (val[0]) === 'number'
      && typeof (val[1]) === 'number')
    );

    this.isValidSetOrientation = (
      val: number | [number, number?] | 'horizontal' | 'vertical' | boolean,
    ): val is 'horizontal' | 'vertical' => (val === 'horizontal' || val === 'vertical');

    this.setCurrentValue = (val: number[]) => {
      if (val.length === 1) {
        this.presenter.setCurrentValue(val[0]);
      } else if (val.length === 2) {
        if (val[0] < val[1]) {
          this.presenter.setCurrentValueMin(val[0]);
          this.presenter.setCurrentValueMax(val[1]);
        } else if (val[0] > val[1]) {
          this.presenter.setCurrentValueMin(val[1]);
          this.presenter.setCurrentValueMax(val[0]);
        }
      }
    };

    this.setOrientation = (val: 'horizontal' | 'vertical') => {
      this.presenter.setOrientation(val);
    };

    this.setMinValue = (val: number) => {
      this.presenter.setMinValue(val);
    };

    this.setMaxValue = (val: number) => {
      this.presenter.setMaxValue(val);
    };

    this.setStep = (val: number) => {
      this.presenter.setStep(val);
    };

    this.setIsShowValueWindow = (val: boolean) => {
      this.presenter.setIsShowValueWindow(val);
    };

    this.setIsShowScaleValues = (val: boolean) => {
      this.presenter.setIsShowScaleValues(val);
    };

    switch (key) {
      case 'setCurrentValue':
        if (this.isValidSetCurrentValue(value)) this.setCurrentValue(value);
        break;
      case 'setOrientation':
        if (this.isValidSetOrientation(value)) this.setOrientation(value);
        break;
      case 'setMinValue':
        if (typeof (value) === 'number') this.setMinValue(value);
        break;
      case 'setMaxValue':
        if (typeof (value) === 'number') this.setMaxValue(value);
        break;
      case 'setStep':
        if (typeof (value) === 'number') this.setStep(value);
        break;
      case 'setIsShowValueWindow':
        if (typeof (value) === 'boolean') this.setIsShowValueWindow(value);
        break;
      case 'setIsShowScaleValues':
        if (typeof (value) === 'boolean') this.setIsShowScaleValues(value);
        break;
      default:
        if (!key) {
          this.presenter = this.init(this);
        } else if (typeof (key) === 'object') {
          this.presenter = this.init(this, key);
        }
    }

    return this;
  };
}(jQuery));
