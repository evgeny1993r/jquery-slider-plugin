import { Model } from '../../src/mvp/Model';

describe('Testing Model with one current value', () => {
  const model = new Model({
    orientation: 'horizontal',
    minValue: -100,
    maxValue: 0,
    currentValue: [-50],
    step: 5,
    isShowValueWindow: false,
    isShowScaleValues: false,
  });

  test('Testing setCurrentValue', () => {
    model.setCurrentValue(-60);
    expect(model.getState('currentValue')).toBe(-60);

    model.setCurrentValue(-150);
    expect(model.getState('currentValue')).toBe(-60);
  });

  test('Testing setOrientation', () => {
    model.setOrientation('vertical');
    expect(model.getState('orientation')).toBe('vertical');
  });

  test('Testing setMinValue', () => {
    model.setMinValue(-200);
    expect(model.getState('minValue')).toBe(-200);

    model.setMinValue(-50);
    expect(model.getState('minValue')).toBe(-200);
  });

  test('Testing setMaxValue', () => {
    model.setMaxValue(200);
    expect(model.getState('maxValue')).toBe(200);

    model.setMaxValue(-200);
    expect(model.getState('maxValue')).toBe(200);
  });

  test('Testing setStep', () => {
    model.setStep(10);
    expect(model.getState('step')).toBe(10);
  });

  test('Testing setIsShowValueWindow', () => {
    model.setIsShowValueWindow(true);
    expect(model.getState('isShowValueWindow')).toBe(true);
  });

  test('Testing setIsShowScaleValues', () => {
    model.setIsShowScaleValues(true);
    expect(model.getState('isShowScaleValues')).toBe(true);
  });
});

describe('Testing Model with two current values', () => {
  const model = new Model({
    orientation: 'vertical',
    minValue: -200,
    maxValue: 200,
    currentValue: [-100, 100],
    step: 1,
    isShowValueWindow: true,
    isShowScaleValues: true,
  });

  test('Testing setCurrentValueMin', () => {
    model.setCurrentValueMin(-50);
    expect(model.getState('currentValueMin')).toBe(-50);

    model.setCurrentValueMin(200);
    expect(model.getState('currentValueMin')).toBe(-50);
  });

  test('Testing setCurrentValueMax', () => {
    model.setCurrentValueMax(50);
    expect(model.getState('currentValueMax')).toBe(50);

    model.setCurrentValueMax(300);
    expect(model.getState('currentValueMax')).toBe(50);
  });

  test('Testing setOrientation', () => {
    model.setOrientation('horizontal');
    expect(model.getState('orientation')).toBe('horizontal');
  });

  test('Testing setMinValue', () => {
    model.setMinValue(-300);
    expect(model.getState('minValue')).toBe(-300);

    model.setMinValue(50);
    expect(model.getState('minValue')).toBe(-300);
  });

  test('Testing setMaxValue', () => {
    model.setMaxValue(400);
    expect(model.getState('maxValue')).toBe(400);

    model.setMaxValue(-100);
    expect(model.getState('maxValue')).toBe(400);
  });

  test('Testing setStep', () => {
    model.setStep(5);
    expect(model.getState('step')).toBe(5);
  });

  test('Testing setIsShowValueWindow', () => {
    model.setIsShowValueWindow(false);
    expect(model.getState('isShowValueWindow')).toBe(false);
  });

  test('Testing setIsShowScaleValues', () => {
    model.setIsShowScaleValues(false);
    expect(model.getState('isShowScaleValues')).toBe(false);
  });
});
