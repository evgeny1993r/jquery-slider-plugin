import * as matchers from 'jest-jquery-matchers';
import $ from 'jquery';
import { ValueWindow } from '../../src/components/value-window/ValueWindow';

declare global {
  interface Window {
    $: JQueryStatic
  }
}

window.$ = $;

describe('Testing ValueWindow', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  test('Testing getValueWindow', () => {
    const valueWindow = new ValueWindow('horizontal');
    const $valueWindow = valueWindow.getValueWindow();

    expect($valueWindow).toHaveClass('value-window value-window_horizontal');
  });

  test('Testing updateOrientation', () => {
    const valueWindow = new ValueWindow('horizontal');
    const $valueWindow = valueWindow.getValueWindow();

    valueWindow.updateOrientation('vertical');
    expect(valueWindow.getState().orientation).toBe('vertical');
    expect($valueWindow).toHaveClass('value-window value-window_vertical');

    valueWindow.updateOrientation('horizontal');
    expect(valueWindow.getState().orientation).toBe('horizontal');
    expect($valueWindow).toHaveClass('value-window value-window_horizontal');
  });

  test('Testing renderValueWindow', () => {
    const valueWindow = new ValueWindow('horizontal');
    const $valueWindow = valueWindow.getValueWindow();

    valueWindow.renderValueWindow(50, 100);
    expect($valueWindow).toHaveText('50');
    expect($valueWindow).toHaveCss({ transform: 'translateX(100px)' });

    valueWindow.updateOrientation('vertical');
    valueWindow.renderValueWindow(100, 150);
    expect($valueWindow).toHaveText('100');
    expect($valueWindow).toHaveCss({ transform: 'translate(-20px, 150px)' });
  });
});
