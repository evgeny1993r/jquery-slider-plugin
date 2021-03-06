import * as matchers from 'jest-jquery-matchers';
import $ from 'jquery';
import { Slider } from '../../src/components/slider/Slider';

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

window.$ = $;

describe('Testing Slider', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  test('Testing getSlider', () => {
    const slider = new Slider('horizontal');
    const $slider = slider.getSlider();
    expect($slider).toHaveClass('slider slider_horizontal');
  });
});
