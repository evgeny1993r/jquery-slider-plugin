import * as matchers from 'jest-jquery-matchers';
import $ from 'jquery';
import { View } from '../../src/mvp/View';

declare global {
  interface Window {
    $: JQueryStatic
  }
}

window.$ = $;

describe('Testing View', () => {
  test('Testing', () => {
    const $this = $('<div />', {
      class: 'slider',
    });

    const view = new View({
      $this,
      orientation: 'horizontal',
      minValue: 0,
      maxValue: 100,
      currentValue: [0],
      step: 1,
      isShowValueWindow: false,
      isShowScaleValues: false,
    });
  });
});
