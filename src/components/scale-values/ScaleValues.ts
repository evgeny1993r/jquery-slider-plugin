import './scale-values.scss';

class ScaleValues {
  orientation: 'horizontal' | 'vertical';
  minValue: number;
  maxValue: number;
  step: number;
  $scaleValues: JQuery;
  symbol: string;

  constructor(orientation: 'horizontal' | 'vertical', minValue: number, maxValue: number, step: number) {
    this.orientation = orientation;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.step = step;
    this.$scaleValues = $('<div/>', {
      class: `scale-values scale-values_${this.orientation}`,
      on: {
        click: (e: JQuery.Event) => this.handleScaleValues(e),
      },
    });

    if (this.orientation === 'horizontal') {
      this.symbol = '|';
    } else if (this.orientation === 'vertical') {
      this.symbol = '—';
    }

    for (
      let value = this.minValue;
      value <= this.maxValue;
      value += (this.maxValue - this.minValue) / 10) {
      this.addScaleValue(Math.floor(value / this.step) * this.step);
    }
  }

  getScaleValues(): JQuery {
    return this.$scaleValues;
  }

  addScaleValue(value: number): void {
    this.$scaleValues
      .append($('<div/>', {
        class: 'scale-values__scale-value',
      }).append($('<span/>', {
        class: 'scale-values__symbol',
        text: this.symbol,
      })).append($('<span/>', {
        text: value,
        class: 'scale-values__value',
      })));
  }

  updatePositionScaleValues(scaleSize: number): void {
    if (this.orientation === 'horizontal') {
      this.$scaleValues.css({
        width: (scaleSize / 10) * 11,
        transform: `translateX(-${scaleSize / 20}px)`,
      });
    } else if (this.orientation === 'vertical') {
      this.$scaleValues.css({
        height: (scaleSize / 10) * 11,
        transform: `translateY(-${scaleSize / 20}px)`,
      });
    }
  }

  updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$scaleValues.removeClass(`scale-values_${this.orientation}`);
    this.orientation = orientation;
    this.$scaleValues.addClass(`scale-values_${this.orientation}`);
    if (this.orientation === 'horizontal') {
      this.$scaleValues.css({ height: 'auto' });
      this.symbol = '|';
      this.$scaleValues.find('.scale-values__symbol').text(this.symbol);
    } else if (this.orientation === 'vertical') {
      this.$scaleValues.css({ width: 'auto' });
      this.symbol = '—';
      this.$scaleValues.find('.scale-values__symbol').text(this.symbol);
    }
  }

  updateMinMaxValues(minValue: number, maxValue: number) {
    this.$scaleValues.find('*').remove();
    this.minValue = minValue;
    this.maxValue = maxValue;
    for (
      let value = this.minValue;
      value <= this.maxValue;
      value += (this.maxValue - this.minValue) / 10) {
      this.addScaleValue(Math.floor(value / this.step) * this.step);
    }
  }

  updateStep(step: number) {
    this.step = step;
    this.$scaleValues.find('*').remove();
    for (
      let value = this.minValue;
      value <= this.maxValue;
      value += (this.maxValue - this.minValue) / 10) {
      this.addScaleValue(Math.floor(value / this.step) * this.step);
    }
  }

  handleScaleValues(e: JQuery.Event): void {
    if (this.orientation === 'horizontal') {
      this.$scaleValues.trigger('clickScale', { position: e.pageX });
    } else if (this.orientation === 'vertical') {
      this.$scaleValues.trigger('clickScale', { position: e.pageY });
    }
  }
}

export {
  ScaleValues,
};
