import * as matchers from 'jest-jquery-matchers';
import $ from 'jquery';
import { ScaleValues } from '../../src/components/scale-values/ScaleValues';

declare global {
  interface Window {
    $: JQueryStatic
  }
}

window.$ = $;

describe('Testing ScaleValues', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  test('Testing getScaleValues with position: "horizontal" ', () => {
    const scaleValues = new ScaleValues('horizontal', 0, 100, 1);
    const $scaleValues = scaleValues.getScaleValues();

    expect($scaleValues).toHaveClass('scale-values scale-values_horizontal');
    expect($scaleValues.find('.scale-values__scale-value').length).toBe(11);
    expect($scaleValues.find('.scale-values__symbol').length).toBe(11);
    expect($scaleValues.find('.scale-values__symbol')).toHaveText('|');
    expect($scaleValues.find('.scale-values__value').length).toBe(11);
    expect($scaleValues.find('.scale-values__value')[0]).toHaveText('0');
    expect($scaleValues.find('.scale-values__value')[1]).toHaveText('10');
    expect($scaleValues.find('.scale-values__value')[2]).toHaveText('20');
    expect($scaleValues.find('.scale-values__value')[3]).toHaveText('30');
    expect($scaleValues.find('.scale-values__value')[4]).toHaveText('40');
    expect($scaleValues.find('.scale-values__value')[5]).toHaveText('50');
    expect($scaleValues.find('.scale-values__value')[6]).toHaveText('60');
    expect($scaleValues.find('.scale-values__value')[7]).toHaveText('70');
    expect($scaleValues.find('.scale-values__value')[8]).toHaveText('80');
    expect($scaleValues.find('.scale-values__value')[9]).toHaveText('90');
    expect($scaleValues.find('.scale-values__value')[10]).toHaveText('100');
  });

  test('Testing getScaleValues with position: "vertical" ', () => {
    const scaleValues = new ScaleValues('vertical', 0, 100, 1);
    const $scaleValues = scaleValues.getScaleValues();

    expect($scaleValues).toHaveClass('scale-values scale-values_vertical');
    expect($scaleValues.find('.scale-values__scale-value').length).toBe(11);
    expect($scaleValues.find('.scale-values__symbol').length).toBe(11);
    expect($scaleValues.find('.scale-values__symbol')).toHaveText('—');
    expect($scaleValues.find('.scale-values__value').length).toBe(11);
    expect($scaleValues.find('.scale-values__value')[0]).toHaveText('0');
    expect($scaleValues.find('.scale-values__value')[1]).toHaveText('10');
    expect($scaleValues.find('.scale-values__value')[2]).toHaveText('20');
    expect($scaleValues.find('.scale-values__value')[3]).toHaveText('30');
    expect($scaleValues.find('.scale-values__value')[4]).toHaveText('40');
    expect($scaleValues.find('.scale-values__value')[5]).toHaveText('50');
    expect($scaleValues.find('.scale-values__value')[6]).toHaveText('60');
    expect($scaleValues.find('.scale-values__value')[7]).toHaveText('70');
    expect($scaleValues.find('.scale-values__value')[8]).toHaveText('80');
    expect($scaleValues.find('.scale-values__value')[9]).toHaveText('90');
    expect($scaleValues.find('.scale-values__value')[10]).toHaveText('100');
  });

  test('Testing updateOrientation', () => {
    const scaleValues = new ScaleValues('horizontal', 100, 200, 5);
    const $scaleValues = scaleValues.getScaleValues();

    scaleValues.updateOrientation('vertical');

    expect(scaleValues.getState().orientation).toBe('vertical');
    expect(scaleValues.getState().symbol).toBe('—');

    expect($scaleValues.hasClass('scale-values scale-values_horizontal')).toBe(false);
    expect($scaleValues).toHaveCss({ width: 'auto' });
    expect($scaleValues).toHaveClass('scale-values scale-values_vertical');
    expect($scaleValues.find('.scale-values__scale-value').length).toBe(11);
    expect($scaleValues.find('.scale-values__symbol').length).toBe(11);
    expect($scaleValues.find('.scale-values__symbol')).toHaveText('—');
    expect($scaleValues.find('.scale-values__value').length).toBe(11);
    expect($scaleValues.find('.scale-values__value')[0]).toHaveText('100');
    expect($scaleValues.find('.scale-values__value')[1]).toHaveText('110');
    expect($scaleValues.find('.scale-values__value')[2]).toHaveText('120');
    expect($scaleValues.find('.scale-values__value')[3]).toHaveText('130');
    expect($scaleValues.find('.scale-values__value')[4]).toHaveText('140');
    expect($scaleValues.find('.scale-values__value')[5]).toHaveText('150');
    expect($scaleValues.find('.scale-values__value')[6]).toHaveText('160');
    expect($scaleValues.find('.scale-values__value')[7]).toHaveText('170');
    expect($scaleValues.find('.scale-values__value')[8]).toHaveText('180');
    expect($scaleValues.find('.scale-values__value')[9]).toHaveText('190');
    expect($scaleValues.find('.scale-values__value')[10]).toHaveText('200');

    scaleValues.updateOrientation('horizontal');

    expect(scaleValues.getState().orientation).toBe('horizontal');
    expect(scaleValues.getState().symbol).toBe('|');

    expect($scaleValues.hasClass('scale-values scale-values_vertical')).toBe(false);
    expect($scaleValues).toHaveCss({ height: 'auto' });
    expect($scaleValues).toHaveClass('scale-values scale-values_horizontal');
    expect($scaleValues.find('.scale-values__scale-value').length).toBe(11);
    expect($scaleValues.find('.scale-values__symbol').length).toBe(11);
    expect($scaleValues.find('.scale-values__symbol')).toHaveText('|');
    expect($scaleValues.find('.scale-values__value').length).toBe(11);
    expect($scaleValues.find('.scale-values__value')[0]).toHaveText('100');
    expect($scaleValues.find('.scale-values__value')[1]).toHaveText('110');
    expect($scaleValues.find('.scale-values__value')[2]).toHaveText('120');
    expect($scaleValues.find('.scale-values__value')[3]).toHaveText('130');
    expect($scaleValues.find('.scale-values__value')[4]).toHaveText('140');
    expect($scaleValues.find('.scale-values__value')[5]).toHaveText('150');
    expect($scaleValues.find('.scale-values__value')[6]).toHaveText('160');
    expect($scaleValues.find('.scale-values__value')[7]).toHaveText('170');
    expect($scaleValues.find('.scale-values__value')[8]).toHaveText('180');
    expect($scaleValues.find('.scale-values__value')[9]).toHaveText('190');
    expect($scaleValues.find('.scale-values__value')[10]).toHaveText('200');
  });

  test('Testing updatePositionScaleValues', () => {
    const scaleValues = new ScaleValues('horizontal', -100, 100, 10);
    const $scaleValues = scaleValues.getScaleValues();

    scaleValues.updatePositionScaleValues(1000);
    expect($scaleValues).toHaveCss({ width: '1100px' });
    expect($scaleValues).toHaveCss({ transform: 'translateX(-50px)' });

    scaleValues.updateOrientation('vertical');
    scaleValues.updatePositionScaleValues(1500);
    expect($scaleValues).toHaveCss({ height: '1650px' });
    expect($scaleValues).toHaveCss({ transform: 'translateY(-75px)' });
  });

  test('Testing updateMinMaxValues', () => {
    const scaleValues = new ScaleValues('horizontal', -200, 200, 10);
    const $scaleValues = scaleValues.getScaleValues();

    scaleValues.updateMinMaxValues(-100, 100);
    expect(scaleValues.getState().minValue).toBe(-100);
    expect(scaleValues.getState().maxValue).toBe(100);

    expect($scaleValues.find('.scale-values__value').length).toBe(11);
    expect($scaleValues.find('.scale-values__value')[0]).toHaveText('-100');
    expect($scaleValues.find('.scale-values__value')[1]).toHaveText('-80');
    expect($scaleValues.find('.scale-values__value')[2]).toHaveText('-60');
    expect($scaleValues.find('.scale-values__value')[3]).toHaveText('-40');
    expect($scaleValues.find('.scale-values__value')[4]).toHaveText('-20');
    expect($scaleValues.find('.scale-values__value')[5]).toHaveText('0');
    expect($scaleValues.find('.scale-values__value')[6]).toHaveText('20');
    expect($scaleValues.find('.scale-values__value')[7]).toHaveText('40');
    expect($scaleValues.find('.scale-values__value')[8]).toHaveText('60');
    expect($scaleValues.find('.scale-values__value')[9]).toHaveText('80');
    expect($scaleValues.find('.scale-values__value')[10]).toHaveText('100');
  });

  test('Testing updateStep', () => {
    const scaleValues = new ScaleValues('horizontal', -300, 300, 10);
    const $scaleValues = scaleValues.getScaleValues();

    scaleValues.updateStep(20);
    expect(scaleValues.getState().step).toBe(20);

    expect($scaleValues.find('.scale-values__value').length).toBe(11);
    expect($scaleValues.find('.scale-values__value')[0]).toHaveText('-300');
    expect($scaleValues.find('.scale-values__value')[1]).toHaveText('-240');
    expect($scaleValues.find('.scale-values__value')[2]).toHaveText('-180');
    expect($scaleValues.find('.scale-values__value')[3]).toHaveText('-120');
    expect($scaleValues.find('.scale-values__value')[4]).toHaveText('-60');
    expect($scaleValues.find('.scale-values__value')[5]).toHaveText('0');
    expect($scaleValues.find('.scale-values__value')[6]).toHaveText('60');
    expect($scaleValues.find('.scale-values__value')[7]).toHaveText('120');
    expect($scaleValues.find('.scale-values__value')[8]).toHaveText('180');
    expect($scaleValues.find('.scale-values__value')[9]).toHaveText('240');
    expect($scaleValues.find('.scale-values__value')[10]).toHaveText('300');
  });

  test('Testing click (orientation: horizontal)', () => {
    const scaleValues = new ScaleValues('horizontal', 0, 100, 1);
    const $scaleValues = scaleValues.getScaleValues();

    scaleValues.subscribe(({ type, value }) => {
      expect(type).toBe('clickScale');
      expect(value).toBe(30);
    });

    const eventClick = $.Event('click', { pageX: 30, pageY: 100 });
    $scaleValues.trigger(eventClick);
  });

  test('Testing click (orientation: vertical)', () => {
    const scaleValues = new ScaleValues('vertical', 0, 100, 1);
    const $scaleValues = scaleValues.getScaleValues();

    scaleValues.subscribe(({ type, value }) => {
      expect(type).toBe('clickScale');
      expect(value).toBe(100);
    });

    const eventClick = $.Event('click', { pageX: 30, pageY: 100 });
    $scaleValues.trigger(eventClick);
  });
});
