import './types/JQueryType';

import { Presenter } from './mvp/Presenter';

import './components/index.scss';

(function ($) {
  $.fn.slider = function (options: Ioptions) {
    const settings = $.extend({
      $this: this,
      minValue: 0,
      maxValue: 100,
      currentValue: [0],
    }, options);

    new Presenter(settings);

    return this;
  };
}(jQuery));
