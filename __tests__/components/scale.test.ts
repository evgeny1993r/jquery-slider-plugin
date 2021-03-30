import * as matchers from 'jest-jquery-matchers';
import $ from 'jquery';
import { Scale } from '../../src/components/scale/Scale';

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

window.$ = $;

describe('Testing Scale', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  const scale = new Scale('horizontal');

  test('Testing getSlider', () => {
    const $slider = scale.getScale();
    expect($slider).toHaveClass('scale scale_horizontal');
  });

  test('Testing updateOrientation', () => {
    const $scale = scale.getScale();
    scale.updateOrientation('vertical');
    expect(scale.getState().orientation).toBe('vertical');
    expect($scale).toHaveClass('scale scale_vertical');
  });

  test('Testing click', () => {
    scale.
    const $scale = scale.getScale();
    $('body').append($scale);
    scale.subscribe(({ type, value }) => {
      console.log(value);
      // expect(type).toBe('clickScale');
    });
    $scale.trigger('click');
  });
});
