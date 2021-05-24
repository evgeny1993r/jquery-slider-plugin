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

  test('Testing subscribe updateCurrentValue', () => {
    presenter.getState().model.broadcast({ type: 'updateCurrentValue', value: 100 });
    expect(presenter.getState().view.getState().currentValue[0]).toBe(100);
  });

  test('Testing subscribe updateCurrentValueMin', () => {
    presenter.getState().model.broadcast({ type: 'updateCurrentValueMin', value: 150 });
    expect(presenter.getState().view.getState().currentValue[0]).toBe(150);
  });

  test('Testing subscribe updateCurrentValueMax', () => {
    presenter.getState().model.broadcast({ type: 'updateCurrentValueMax', value: 200 });
    expect(presenter.getState().view.getState().currentValue[1]).toBe(200);
  });

  test('Testing subscribe updateOrientation', () => {
    presenter.getState().model.broadcast({ type: 'updateOrientation', value: 'vertical' });
    expect(presenter.getState().view.getState().orientation).toBe('vertical');
  });

  test('Testing subscribe updateMinValue', () => {
    presenter.getState().model.broadcast({ type: 'updateMinValue', value: -100 });
    expect(presenter.getState().view.getState().minValue).toBe(-100);
  });

  test('Testing subscribe updateMaxValue', () => {
    presenter.getState().model.broadcast({ type: 'updateMaxValue', value: 250 });
    expect(presenter.getState().view.getState().maxValue).toBe(250);
  });

  test('Testing subscribe updateStep', () => {
    presenter.getState().model.broadcast({ type: 'updateStep', value: 5 });
    expect(presenter.getState().view.getState().step).toBe(5);
  });

  test('Testing subscribe updateIsShowScaleValues', () => {
    presenter.getState().model.broadcast({ type: 'updateIsShowScaleValues', value: true });
    expect(presenter.getState().view.getState().isShowScaleValues).toBe(true);
  });

  test('Testing subscribe updateIsShowValueWindow', () => {
    presenter.getState().model.broadcast({ type: 'updateIsShowValueWindow', value: true });
    expect(presenter.getState().view.getState().isShowValueWindow).toBe(true);
  });

  test('Testing subscribe setCurrentValue', () => {
    presenter.getState().view.broadcast({ type: 'setCurrentValue', value: 50 });
    expect(presenter.getState().model.getState().currentValue[0]).toBe(50);
  });

  test('Testing subscribe setCurrentValueMin', () => {
    presenter.getState().view.broadcast({ type: 'setCurrentValueMin', value: 30 });
    expect(presenter.getState().model.getState().currentValue[0]).toBe(30);
  });

  test('Testing subscribe setCurrentValueMax', () => {
    presenter.getState().view.broadcast({ type: 'setCurrentValueMax', value: 70 });
    expect(presenter.getState().model.getState().currentValue[1]).toBe(70);
  });

  test('Testing setOrientation', () => {
    presenter.setOrientation('horizontal');
    expect(presenter.getState().model.getState().orientation).toBe('horizontal');
    expect(presenter.getState().view.getState().orientation).toBe('horizontal');
  });

  test('Testing setMinValue', () => {
    presenter.setMinValue(-200);
    expect(presenter.getState().model.getState().minValue).toBe(-200);
    expect(presenter.getState().view.getState().minValue).toBe(-200);
  });

  test('Testing setMaxValue', () => {
    presenter.setMaxValue(200);
    expect(presenter.getState().model.getState().maxValue).toBe(200);
    expect(presenter.getState().view.getState().maxValue).toBe(200);
  });

  test('Testing setStep', () => {
    presenter.setStep(5);
    expect(presenter.getState().model.getState().step).toBe(5);
    expect(presenter.getState().view.getState().step).toBe(5);
  });

  test('Testing setIsShowValueWindow', () => {
    presenter.setIsShowValueWindow(true);
    expect(presenter.getState().model.getState().isShowValueWindow).toBe(true);
    expect(presenter.getState().view.getState().isShowValueWindow).toBe(true);
  });

  test('Testing setIsShowScaleValues', () => {
    presenter.setIsShowScaleValues(true);
    expect(presenter.getState().model.getState().isShowScaleValues).toBe(true);
    expect(presenter.getState().view.getState().isShowScaleValues).toBe(true);
  });
});
