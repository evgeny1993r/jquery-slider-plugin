import { Observer } from '../../observer/Observer';
import { IUpdateScaleValues } from '../../types/observer/IUpdateScaleValues';

import './scale-values.scss';

class ScaleValues extends Observer<IUpdateScaleValues> {
  private orientation: 'horizontal' | 'vertical';
  private minValue: number;
  private maxValue: number;
  private step: number;
  private $scaleValues: JQuery;
  private symbol: string;
  private scaleSize: number;

  constructor(
    orientation: 'horizontal' | 'vertical',
    minValue: number,
    maxValue: number,
    step: number,
  ) {
    super();
    this.orientation = orientation;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.step = step;
    this.$scaleValues = $('<div/>', {
      class: `scale-values scale-values_${this.orientation}`,
    });

    if (this.orientation === 'horizontal') {
      this.symbol = '|';
    }
    if (this.orientation === 'vertical') {
      this.symbol = '—';
    }

    const val = Math.round((this.maxValue - this.minValue) / 8 / this.step) * this.step;

    this.addScaleValue(this.minValue);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 2);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 3);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 4);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 5);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 6);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 7);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 8);
    this.addScaleValue(this.maxValue);
  }

  public getScaleValues(): JQuery {
    return this.$scaleValues;
  }

  public updatePositionScaleValues(scaleSize: number): void {
    this.scaleSize = scaleSize;
    if (this.orientation === 'horizontal') {
      const items = this.$scaleValues.find('.scale-values__scale-value');
      const unit = this.scaleSize / (this.maxValue - this.minValue);
      for (let i = 0; i <= items.length; i += 1) {
        const valueItem = $(items[i]).data('value') - this.minValue;
        $(items[i]).css({ transform: `translateX(${valueItem * unit - 20}px)` });
      }
    }
    if (this.orientation === 'vertical') {
      const items = this.$scaleValues.find('.scale-values__scale-value');
      const unit = this.scaleSize / (this.maxValue - this.minValue);
      for (let i = 0; i <= items.length; i += 1) {
        const valueItem = $(items[i]).data('value') - this.minValue;
        $(items[i]).css({ transform: `translateY(${valueItem * unit - 20}px)` });
      }
    }
  }

  public updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$scaleValues.removeClass(`scale-values_${this.orientation}`);
    this.orientation = orientation;
    this.$scaleValues.addClass(`scale-values_${this.orientation}`);
    if (this.orientation === 'horizontal') {
      this.symbol = '|';
      this.$scaleValues.find('.scale-values__symbol').text(this.symbol);
    }
    if (this.orientation === 'vertical') {
      this.symbol = '—';
      this.$scaleValues.find('.scale-values__symbol').text(this.symbol);
    }
  }

  public updateMinMaxValues(minValue: number, maxValue: number) {
    this.$scaleValues.find('*').remove();
    this.minValue = minValue;
    this.maxValue = maxValue;

    const val = Math.round((this.maxValue - this.minValue) / 6 / this.step) * this.step;

    this.addScaleValue(this.minValue);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 2);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 3);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 4);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 5);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 6);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 7);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 8);
    this.addScaleValue(this.maxValue);

    this.updatePositionScaleValues(this.scaleSize);
  }

  public updateStep(step: number) {
    this.step = step;
    this.$scaleValues.find('*').remove();

    const val = Math.round((this.maxValue - this.minValue) / 6 / this.step) * this.step;

    this.addScaleValue(this.minValue);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 2);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 3);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 4);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 5);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 6);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 7);
    this.addScaleValue(Math.round(this.minValue / this.step) * this.step + val * 8);
    this.addScaleValue(this.maxValue);

    this.updatePositionScaleValues(this.scaleSize);
  }

  private addScaleValue(value: number): void {
    if (value > this.maxValue) return;
    this.$scaleValues
      .append($('<div/>', {
        class: 'scale-values__scale-value',
        data: { value },
        on: {
          click: () => this.handleScaleValueClick(value),
        },
      }).append($('<span/>', {
        class: 'scale-values__symbol',
        text: this.symbol,
      })).append($('<span/>', {
        text: value,
        class: 'scale-values__value',
      })));
  }

  private handleScaleValueClick(value: number): void {
    if (this.orientation === 'horizontal') {
      this.broadcast({ type: 'clickScaleValues', value });
    }
    if (this.orientation === 'vertical') {
      this.broadcast({ type: 'clickScaleValues', value });
    }
  }

  public getState() {
    return {
      orientation: this.orientation,
      symbol: this.symbol,
      minValue: this.minValue,
      maxValue: this.maxValue,
      step: this.step,
    };
  }
}

export {
  ScaleValues,
};
