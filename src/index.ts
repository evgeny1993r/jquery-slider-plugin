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

    setOrientation: (orientation: string) => {
      presenter.broadcast({ type: 'setOrientation', value: orientation });
    },

    setMinValue: (minValue: number) => {
      presenter.broadcast({ type: 'setMinValue', value: minValue });
    },

    setMaxValue: (maxValue: number) => {
      presenter.broadcast({ type: 'setMaxValue', value: maxValue });
    },

    setCurrentValue: (value: number[]) => {
      if (value.length === 1) {
        presenter.broadcast({ type: 'setCurrentValue', value: value[0] });
      } else if (value.length === 2) {
        presenter.broadcast({ type: 'setCurrentValueMin', value: value[0] });
        presenter.broadcast({ type: 'setCurrentValueMax', value: value[1] });
      }
    },

    setStep: (step: number) => {
      presenter.broadcast({ type: 'setStep', value: step });
    },

    setIsShowValueWindow: (isShowValueWindow: boolean) => {
      presenter.broadcast({ type: 'setIsShowValueWindow', value: isShowValueWindow });
    },

    setIsShowScaleValues: (isShowScaleValues: boolean) => {
      presenter.broadcast({ type: 'setIsShowScaleValues', value: isShowScaleValues });
    },
  };

  $.fn.slider = function (key, value) {
    if (!key) {
      presenter = methods.init(this);
    } else if (typeof (key) === 'object') {
      presenter = methods.init(this, key);
    } else if (key === 'setCurrentValue' && Array.isArray(value) && typeof (value[0]) === 'number' && (typeof (value[1]) === 'undefined' || typeof (value[1]) === 'number')) {
      methods.setCurrentValue(value);
    } else if ((key === 'setOrientation' && value === 'horizontal') || (key === 'setOrientation' && value === 'vertical')) {
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
