import './types/JQueryType';

import { Presenter } from './mvp/Presenter';

import './components/index.scss';

(function ($) {
  $.fn.slider = function (options: Ioptions) {
    const settings = $.extend({
      $this: this,
      position: 'horizontal',
      minValue: 0,
      maxValue: 100,
      currentValue: [0],
      step: 1,
      isShowValueWindow: false,
      $inputElement: $(),
      symbol: '',
    }, options);

    new Presenter(settings);

    return this;
  };
}(jQuery));
