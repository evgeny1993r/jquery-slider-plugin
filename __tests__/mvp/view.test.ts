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
  describe('Testing View with currentValue', () => {
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
      isShowValueWindow: true,
      isShowScaleValues: true,
    });

    test('$valueWindow to be defined', () => {
      expect(view.getState().$valueWindow).toBeDefined();
    });

    test('$scaleValues to be defined', () => {
      expect(view.getState().$scaleValues).toBeDefined();
    });

    test('Testing updateCurrentValue', () => {
      view.updateCurrentValue(75);
      expect(view.getState().currentValue[0]).toBe(75);
      expect(view.getState().viewCurrentValue[0]).toBe(75);
    });

    test('Testing updateCurrentValueMin', () => {
      view.updateCurrentValueMin(25);
      expect(view.getState().currentValue[0]).toBe(25);
      expect(view.getState().viewCurrentValue[0]).toBe(25);
      expect(view.getState().$runner).toBeUndefined();
      expect(view.getState().$valueWindow).toBeUndefined();
      expect(view.getState().$runnerMin).toBeDefined();
      expect(view.getState().$runnerMax).toBeDefined();
      expect(view.getState().$valueWindowMin).toBeDefined();
      expect(view.getState().$valueWindowMax).toBeDefined();
      expect($this.find('.runner').length).toBe(2);
      expect($this.find('.value-window').length).toBe(2);
    });

    test('Testing updateCurrentValueMax', () => {
      view.updateCurrentValueMax(75);
      expect(view.getState().currentValue[1]).toBe(75);
      expect(view.getState().viewCurrentValue[1]).toBe(75);
      expect(view.getState().$runner).toBeUndefined();
      expect(view.getState().$valueWindow).toBeUndefined();
      expect(view.getState().$runnerMin).toBeDefined();
      expect(view.getState().$runnerMax).toBeDefined();
      expect(view.getState().$valueWindowMin).toBeDefined();
      expect(view.getState().$valueWindowMax).toBeDefined();
      expect($this.find('.runner').length).toBe(2);
      expect($this.find('.value-window').length).toBe(2);
    });

    test('Testing updatePosition', () => {
      view.updateOrientation('vertical');
      expect(view.getState().orientation).toBe('vertical');
      expect($this.find('.slider_horizontal').length).toBe(0);
      expect($this.find('.slider_vertical').length).toBe(1);
    });

    test('Testing updateMinValue', () => {
      view.updateMinValue(-150);
      expect(view.getState().minValue).toBe(-150);
      expect(view.getState().viewMinValue).toBe(0);
      expect(view.getState().viewCurrentValue[0]).toBe(175);
      expect(view.getState().viewCurrentValue[1]).toBe(225);
    });

    test('Testing updateMaxValue', () => {
      view.updateMaxValue(300);
      expect(view.getState().maxValue).toBe(300);
      expect(view.getState().viewMaxValue).toBe(450);
    });

    test('Testing updateStep', () => {
      view.updateStep(5);
      expect(view.getState().step).toBe(5);
    });

    test('Testing updateIsShowValueWindow', () => {
      view.updateIsShowValueWindow(false);
      expect(view.getState().isShowValueWindow).toBe(false);
      expect(view.getState().$valueWindowMin).toBeUndefined();
      expect(view.getState().$valueWindowMax).toBeUndefined();
      expect($this.find('.value-window').length).toBe(0);

      view.updateIsShowValueWindow(true);
      expect(view.getState().isShowValueWindow).toBe(true);
      expect(view.getState().$valueWindowMin).toBeDefined();
      expect(view.getState().$valueWindowMax).toBeDefined();
      expect($this.find('.value-window').length).toBe(2);
    });

    test('Testing updateIsShowScaleValues', () => {
      view.updateIsShowScaleValues(false);
      expect(view.getState().isShowScaleValues).toBe(false);
      expect($this.find('.scale-values').length).toBe(0);

      view.updateIsShowScaleValues(true);
      expect(view.getState().isShowScaleValues).toBe(true);
      expect($this.find('.scale-values').length).toBe(1);
    });
  });

  describe('Testing View with currentValues', () => {
    const $this = $('<div />', {
      class: 'slider',
    });

    const view = new View({
      $this,
      orientation: 'vertical',
      minValue: -100,
      maxValue: 100,
      currentValue: [-50, 50],
      step: 1,
      isShowValueWindow: true,
      isShowScaleValues: true,
    });

    test('$valueWindowMin and $valueWindowMax to be defined', () => {
      expect(view.getState().$valueWindowMin).toBeDefined();
      expect(view.getState().$valueWindowMax).toBeDefined();
    });

    test('$scaleValues to be defined', () => {
      expect(view.getState().$scaleValues).toBeDefined();
    });

    test('Testing updateCurrentValueMin', () => {
      view.updateCurrentValueMin(-100);
      expect(view.getState().currentValue[0]).toBe(-100);
      expect(view.getState().viewCurrentValue[0]).toBe(0);
    });

    test('Testing updateCurrentValueMax', () => {
      view.updateCurrentValueMax(100);
      expect(view.getState().currentValue[1]).toBe(100);
      expect(view.getState().viewCurrentValue[1]).toBe(200);
    });

    test('Testing updateCurrentValue', () => {
      view.updateCurrentValue(100);
      expect(view.getState().currentValue[0]).toBe(100);
      expect(view.getState().viewCurrentValue[0]).toBe(200);
      expect(view.getState().currentValue[1]).toBeUndefined();
      expect(view.getState().viewCurrentValue[1]).toBeUndefined();
      expect(view.getState().$runnerMin).toBeUndefined();
      expect(view.getState().$runnerMax).toBeUndefined();
      expect(view.getState().$valueWindowMin).toBeUndefined();
      expect(view.getState().$valueWindowMax).toBeUndefined();
      expect(view.getState().$runner).toBeDefined();
      expect(view.getState().$valueWindow).toBeDefined();
      expect($this.find('.runner').length).toBe(1);
      expect($this.find('.value-window').length).toBe(1);
    });

    test('Testing updatePosition', () => {
      view.updateOrientation('horizontal');
      expect(view.getState().orientation).toBe('horizontal');
      expect($this.find('.slider_vertical').length).toBe(0);
      expect($this.find('.slider_horizontal').length).toBe(1);
    });

    test('Testing updateMinValue', () => {
      view.updateMinValue(-200);
      expect(view.getState().minValue).toBe(-200);
      expect(view.getState().viewMinValue).toBe(0);
      expect(view.getState().viewCurrentValue[0]).toBe(300);
    });

    test('Testing updateMaxValue', () => {
      view.updateMaxValue(200);
      expect(view.getState().maxValue).toBe(200);
      expect(view.getState().viewMaxValue).toBe(400);
    });

    test('Testing updateStep', () => {
      view.updateStep(3);
      expect(view.getState().step).toBe(3);
    });

    test('Testing updateIsShowValueWindow', () => {
      view.updateIsShowValueWindow(false);
      expect(view.getState().isShowValueWindow).toBe(false);
      expect(view.getState().$valueWindow).toBeUndefined();
      expect($this.find('.value-window').length).toBe(0);

      view.updateIsShowValueWindow(true);
      expect(view.getState().isShowValueWindow).toBe(true);
      expect(view.getState().$valueWindow).toBeDefined();
      expect($this.find('.value-window').length).toBe(1);
    });

    test('Testing updateIsShowScaleValues', () => {
      view.updateIsShowScaleValues(false);
      expect(view.getState().isShowScaleValues).toBe(false);
      expect($this.find('.scale-values').length).toBe(0);

      view.updateIsShowScaleValues(true);
      expect(view.getState().isShowScaleValues).toBe(true);
      expect($this.find('.scale-values').length).toBe(1);
    });
  });
});
