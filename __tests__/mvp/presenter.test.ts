import * as matchers from 'jest-jquery-matchers';
import $ from 'jquery';
import { Presenter } from '../../src/mvp/Presenter';

declare global {
  interface Window {
    $: JQueryStatic
  }
}

window.$ = $;

describe('Testing Presenter', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  test('Testing', () => {
    const $this = $('<div />', {
      class: 'slider',
    });

    const presenter = new Presenter({
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
