import './types/JQueryType';

import { Presenter } from './mvp/Presenter';

(function ($) {
  const methods = {
    init: ($this: JQuery, options?: Ioptions) => {
      const settings = $.extend({
        $this,
        position: 'horizontal',
        minValue: 0,
        maxValue: 100,
        currentValue: [0],
        step: 1,
        isShowValueWindow: false,
        isShowScaleValues: false
      }, options);

      new Presenter(settings);
    },

    setPosition: ($this: JQuery, position: string) => {
      $this.trigger('setPosition', { position });
    },

    setMinValue: ($this: JQuery, minValue: number) => {
      $this.trigger('setMinValue', { minValue });
    },

    setMaxValue: ($this: JQuery, maxValue: number) => {
      $this.trigger('setMaxValue', { maxValue });
    },

    setCurrentValue: ($this: JQuery, value: number[]) => {
      if (value.length === 1) {
        $this.trigger('setCurrentValue', { currentValue: value[0] });
      } else if (value.length === 2) {
        $this.trigger('setCurrentValueMin', { currentValueMin: value[0] });
        $this.trigger('setCurrentValueMax', { currentValueMax: value[1] });
      }
    },

    setStep: ($this: JQuery, step: number) => {
      $this.trigger('setStep', { step });
    },

    setIsShowValueWindow: ($this:JQuery, isShowValueWindow: boolean) => {
      $this.trigger('setIsShowValueWindow', { isShowValueWindow });
    },

    setIsShowScaleValues: ($this: JQuery, isShowScaleValues: boolean) => {
      $this.trigger('setIsShowScaleValues', { isShowScaleValues });
    },
  };

  $.fn.slider = function (key, value) {
    if (!key) {
      methods.init(this);
    } else if (typeof (key) === 'object') {
      methods.init(this, key);
    } else if (key === 'setCurrentValue' && Array.isArray(value) && typeof (value[0]) === 'number' && (typeof (value[1]) === 'undefined' || typeof (value[1]) === 'number')) {
      methods.setCurrentValue(this, value);
    } else if (key === 'setPosition' && typeof (value) === 'string') {
      methods.setPosition(this, value);
    } else if (key === 'setMinValue' && typeof (value) === 'number') {
      methods.setMinValue(this, value);
    } else if (key === 'setMaxValue' && typeof (value) === 'number') {
      methods.setMaxValue(this, value);
    } else if (key === 'setStep' && typeof (value) === 'number') {
      methods.setStep(this, value);
    } else if (key === 'setIsShowValueWindow' && typeof (value) === 'boolean') {
      methods.setIsShowValueWindow(this, value);
    } else if (key === 'setIsShowScaleValues' && typeof (value) === 'boolean') {
      methods.setIsShowScaleValues(this, value);
    }

    return this;
  };
}(jQuery));
