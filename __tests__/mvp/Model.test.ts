import { Model } from '../../src/mvp/Model';

describe('Testing basic model methods', () => {
  const model = new Model({
    orientation: 'horizontal',
    minValue: 0,
    maxValue: 100,
    currentValue: [0],
    step: 1,
    isShowValueWindow: false,
    isShowScaleValues: false,
  });

  test('Testing setCurrentValue', () => {
    model.setCurrentValue(-150);
    expect(model.getState().currentValue[0]).toBe(0);

    model.setCurrentValue(150);
    expect(model.getState().currentValue[0]).toBe(0);

    model.setCurrentValue(50);
    expect(model.getState().currentValue[0]).toBe(50);

    model.setCurrentValueMax(75);
    model.setCurrentValue(0);
    expect(model.getState().currentValue[0]).toBe(0);
    expect(model.getState().currentValue[1]).toBeUndefined();
  });

  test('Testing setCurrentValueMin', () => {
    model.setCurrentValueMin(-50);
    expect(model.getState().currentValue[0]).toBe(0);

    model.setCurrentValueMin(50);
    expect(model.getState().currentValue[0]).toBe(50);

    model.setCurrentValueMax(100);
    model.setCurrentValueMin(-25);
    expect(model.getState().currentValue[0]).toBe(50);

    model.setCurrentValueMin(25);
    expect(model.getState().currentValue[0]).toBe(25);
  });

  test('Testing setCurrentValueMax', () => {
    model.setCurrentValueMax(150);
    expect(model.getState().currentValue[1]).toBe(100);

    model.setCurrentValueMax(50);
    expect(model.getState().currentValue[1]).toBe(50);
  });

  test('Testing setOrientation', () => {
    model.setOrientation('vertical');
    expect(model.getState().orientation).toBe('vertical');

    model.setOrientation('horizontal');
    expect(model.getState().orientation).toBe('horizontal');
  });

  test('Testing setMinValue', () => {
    model.setMinValue(100);
    expect(model.getState().minValue).toBe(0);

    model.setMinValue(-100);
    expect(model.getState().minValue).toBe(-100);
  });

  test('Testing setMaxValue', () => {
    model.setMaxValue(-200);
    expect(model.getState().maxValue).toBe(100);

    model.setMaxValue(200);
    expect(model.getState().maxValue).toBe(200);

    model.setCurrentValue(0);

    model.setMaxValue(-100);
    expect(model.getState().maxValue).toBe(200);

    model.setMaxValue(300);
    expect(model.getState().maxValue).toBe(300);
  });

  test('Testing setStep', () => {
    model.setStep(50);
    expect(model.getState().step).toBe(1);

    model.setStep(5);
    expect(model.getState().step).toBe(5);
  });

  test('Testing setIsShowValueWindow', () => {
    model.setIsShowValueWindow(true);
    expect(model.getState().isShowValueWindow).toBe(true);

    model.setIsShowValueWindow(false);
    expect(model.getState().isShowValueWindow).toBe(false);
  });

  test('Testing setIsShowScaleValues', () => {
    model.setIsShowScaleValues(true);
    expect(model.getState().isShowScaleValues).toBe(true);

    model.setIsShowScaleValues(false);
    expect(model.getState().isShowScaleValues).toBe(false);
  });
});
