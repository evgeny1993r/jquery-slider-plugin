import './types/JQuery';

import { Presenter } from './mvp/Presenter';
import { IPresenter } from './types/mvp/IPresenter';

(function ($) {
  let presenter: IPresenter;
  const methods = {
    init: ($this: JQuery, options?: IOptions) => {
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
    },

    isValidSetCurrentValue(
      value: number | [number, number?] | 'horizontal' | 'vertical' | boolean,
    ): value is [number, number?] {
      return (
        (Array.isArray(value)
        && typeof (value[0]) === 'number')
        || (Array.isArray(value)
        && typeof (value[0]) === 'number'
        && typeof (value[1]) === 'number')
      );
    },

    isValidSetOrientation(
      value: number | [number, number?] | 'horizontal' | 'vertical' | boolean,
    ): value is 'horizontal' | 'vertical' {
      return (value === 'horizontal' || value === 'vertical');
    },

    setCurrentValue: (value: number[]) => {
      if (value.length === 1) {
        presenter.setCurrentValue(value[0]);
      } else if (value.length === 2) {
        presenter.setCurrentValueMin(value[0]);
        presenter.setCurrentValueMax(value[1]);
      }
    },

    setOrientation: (value: 'horizontal' | 'vertical') => {
      presenter.setOrientation(value);
    },

    setMinValue(value: number) {
      presenter.setMinValue(value);
    },

    setMaxValue(value: number) {
      presenter.setMaxValue(value);
    },

    setStep(value: number) {
      presenter.setStep(value);
    },

    setIsShowValueWindow(value: boolean) {
      presenter.setIsShowValueWindow(value);
    },

    setIsShowScaleValues(value: boolean) {
      presenter.setIsShowScaleValues(value);
    },
  };

  $.fn.slider = function (key, value) {
    switch (key) {
      case 'setCurrentValue':
        if (methods.isValidSetCurrentValue(value)) methods.setCurrentValue(value);
        break;
      case 'setOrientation':
        if (methods.isValidSetOrientation(value)) methods.setOrientation(value);
        break;
      case 'setMinValue':
        if (typeof (value) === 'number') methods.setMinValue(value);
        break;
      case 'setMaxValue':
        if (typeof (value) === 'number') methods.setMaxValue(value);
        break;
      case 'setStep':
        if (typeof (value) === 'number') methods.setStep(value);
        break;
      case 'setIsShowValueWindow':
        if (typeof (value) === 'boolean') methods.setIsShowValueWindow(value);
        break;
      case 'setIsShowScaleValues':
        if (typeof (value) === 'boolean') methods.setIsShowScaleValues(value);
        break;
      default:
        if (!key) {
          presenter = methods.init(this);
        } else if (typeof (key) === 'object') {
          presenter = methods.init(this, key);
        }
    }

    return this;
  };
}(jQuery));
