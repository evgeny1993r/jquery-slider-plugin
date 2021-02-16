import './types/JQueryType';

import { Presenter } from './mvp/Presenter';

(function ($) {
  let presenter: any;
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

    setMinValue: (value: number) => {
      presenter.setMinValue(value);
    },

    setMaxValue: (value: number) => {
      presenter.setMaxValue(value);
    },

    setStep: (value: number) => {
      presenter.setStep(value);
    },

    setIsShowValueWindow: (value: boolean) => {
      presenter.setIsShowValueWindow(value);
    },

    setIsShowScaleValues: (value: boolean) => {
      presenter.setIsShowScaleValues(value);
    },
  };

  $.fn.slider = function (key, value) {
    if (!key) {
      presenter = methods.init(this);
    } else if (typeof (key) === 'object') {
      presenter = methods.init(this, key);
    } else if (
      key === 'setCurrentValue'
      && Array.isArray(value)
      && typeof (value[0]) === 'number'
      && (typeof (value[1]) === 'undefined' || typeof (value[1]) === 'number')) {
      methods.setCurrentValue(value);
    } else if (
      (key === 'setOrientation' && value === 'horizontal')
      || (key === 'setOrientation' && value === 'vertical')) {
      methods.setOrientation(value);
    } else if (key === 'setMinValue' && typeof (value) === 'number') {
      methods.setMinValue(value);
    } else if (key === 'setMaxValue' && typeof (value) === 'number') {
      methods.setMaxValue(value);
    } else if (key === 'setStep' && typeof (value) === 'number') {
      methods.setStep(value);
    } else if (key === 'setIsShowValueWindow' && typeof (value) === 'boolean') {
      methods.setIsShowValueWindow(value);
    } else if (key === 'setIsShowScaleValues' && typeof (value) === 'boolean') {
      methods.setIsShowScaleValues(value);
    }

    return this;
  };
}(jQuery));
