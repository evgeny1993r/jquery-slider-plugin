import * as matchers from 'jest-jquery-matchers';
import $ from 'jquery';
import { ProgressBar } from '../../src/components/progress-bar/ProgressBar';

declare global {
  interface Window {
    $: JQueryStatic
  }
}
window.$ = $;

describe('Testing ProgressBar', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  test('Testing getProgressBar', () => {
    const progressBar = new ProgressBar('horizontal');
    const $progressBar = progressBar.getProgressBar();

    expect($progressBar).toHaveClass('progress-bar progress-bar_horizontal');
  });

  test('Testing updateOrientation', () => {
    const progressBar = new ProgressBar('horizontal');
    const $progressBar = progressBar.getProgressBar();

    progressBar.updateOrientation('vertical');
    expect(progressBar.getState().orientation).toBe('vertical');
    expect($progressBar).toHaveClass('progress-bar progress-bar_vertical');

    progressBar.updateOrientation('horizontal');
    expect(progressBar.getState().orientation).toBe('horizontal');
    expect($progressBar).toHaveClass('progress-bar progress-bar_horizontal');
  });

  test('Testing renderProgressBar', () => {
    const progressBar = new ProgressBar('horizontal');
    const $progressBar = progressBar.getProgressBar();

    progressBar.renderProgressBar(100, 50);
    expect($progressBar).toHaveCss({ width: '100px', transform: 'translateX(50px)' });

    progressBar.updateOrientation('vertical');
    progressBar.renderProgressBar(150, 100);
    expect($progressBar).toHaveCss({ height: '150px', transform: 'translateY(100px)' });
  });

  test('Testing click (orientation: horizontal)', () => {
    const progressBar = new ProgressBar('horizontal');
    const $progressBar = progressBar.getProgressBar();

    progressBar.subscribe(({ type, value }) => {
      expect(type).toBe('clickScale');
      expect(value).toBe(100);
    });

    const eventClick = $.Event('click', { pageX: 100, pageY: 200 });
    $progressBar.trigger(eventClick);
  });

  test('Testing click (orientation: vertical)', () => {
    const progressBar = new ProgressBar('vertical');
    const $progressBar = progressBar.getProgressBar();

    progressBar.subscribe(({ type, value }) => {
      expect(type).toBe('clickScale');
      expect(value).toBe(150);
    });

    const eventClick = $.Event('click', { pageX: 50, pageY: 150 });
    $progressBar.trigger(eventClick);
  });
});
