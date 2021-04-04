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

  test('Testing getSlider', () => {
    const scale = new Scale('horizontal');
    const $slider = scale.getScale();

    expect($slider).toHaveClass('scale scale_horizontal');
  });

  test('Testing updateOrientation', () => {
    const scale = new Scale('horizontal');
    const $scale = scale.getScale();

    scale.updateOrientation('vertical');
    expect(scale.getState().orientation).toBe('vertical');
    expect($scale).toHaveClass('scale scale_vertical');

    scale.updateOrientation('horizontal');
    expect(scale.getState().orientation).toBe('horizontal');
    expect($scale).toHaveClass('scale scale_horizontal');
  });

  test('Testing click (orientation: horizontal)', () => {
    const scale = new Scale('horizontal');
    const $scale = scale.getScale();

    scale.subscribe(({ type, value }) => {
      expect(type).toBe('clickScale');
      expect(value).toBe(30);
    });

    const eventClick = $.Event('click', { pageX: 30, pageY: 100 });
    $scale.trigger(eventClick);
  });

  test('Testing click (orientation: vertical)', () => {
    const scale = new Scale('vertical');
    const $scale = scale.getScale();

    scale.subscribe(({ type, value }) => {
      expect(type).toBe('clickScale');
      expect(value).toBe(100);
    });

    const eventClick = $.Event('click', { pageX: 30, pageY: 100 });
    $scale.trigger(eventClick);
  });
});
