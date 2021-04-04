import * as matchers from 'jest-jquery-matchers';
import $ from 'jquery';
import { Runner } from '../../src/components/runner/Runner';

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

window.$ = $;

describe('Testing Runner', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  test('Testing getRunner', () => {
    const runner = new Runner('horizontal');
    const $runner = runner.getRunner();

    expect($runner).toHaveClass('runner runner_horizontal');
  });

  test('Testing updateOrientation', () => {
    const runner = new Runner('horizontal');
    const $runner = runner.getRunner();

    runner.updateOrientation('vertical');
    expect(runner.getState().orientation).toBe('vertical');
    expect($runner).toHaveClass('runner runner_vertical');

    runner.updateOrientation('horizontal');
    expect(runner.getState().orientation).toBe('horizontal');
    expect($runner).toHaveClass('runner runner_horizontal');
  });

  test('Testing updatePositionRunner', () => {
    const runner = new Runner('horizontal');
    const $runner = runner.getRunner();

    runner.updatePositionRunner(100);
    expect($runner).toHaveCss({ transform: 'translateX(100px)' });

    runner.updateOrientation('vertical');
    runner.updatePositionRunner(200);
    expect($runner).toHaveCss({ transform: 'translateY(200px)' });
  });

  test('Testing mousemove (orientation: horizontal)', () => {
    const runner = new Runner('horizontal');
    const $runner = runner.getRunner();

    runner.subscribe(({ type, value }) => {
      expect(type).toBe('updatePositionRunner');
      expect(value).toBe(100);
    });

    const eventMousedown = $.Event('mousedown');
    const eventMousemove = $.Event('mousemove', { pageX: 100, pageY: 200 });
    const eventMouseup = $.Event('mouseup');
    $runner.trigger(eventMousedown);
    $(document).trigger(eventMousemove);
    $(document).trigger(eventMouseup);
  });

  test('Testing mousemove (orientation: vertical)', () => {
    const runner = new Runner('vertical');
    const $runner = runner.getRunner();

    runner.subscribe(({ type, value }) => {
      expect(type).toBe('updatePositionRunner');
      expect(value).toBe(200);
    });

    const eventMousedown = $.Event('mousedown');
    const eventMousemove = $.Event('mousemove', { pageX: 100, pageY: 200 });
    const eventMouseup = $.Event('mouseup');
    $runner.trigger(eventMousedown);
    $(document).trigger(eventMousemove);
    $(document).trigger(eventMouseup);
  });
});
