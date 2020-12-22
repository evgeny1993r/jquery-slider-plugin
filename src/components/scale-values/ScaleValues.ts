import './scale-values.scss';

class ScaleValues {
  $this: JQuery;
  position: string;
  $scaleValues: JQuery;
  symbol: string;

  constructor($this: JQuery, position: string, minValue: number, maxValue: number) {
    this.$this = $this;
    this.position = position;
    this.$scaleValues = $('<div/>', {
      class: `scale-values scale-values_${this.position}`,
      on: {
        click: (e: JQuery.Event) => this.handleScaleValues(e),
      },
    });

    if (this.position === 'horizontal') {
      this.symbol = '|';
    } else if (this.position === 'vertical') {
      this.symbol = '—';
    }

    for (let value = minValue; value <= maxValue; value += ((maxValue - minValue) / 10)) {
      this.addScaleValue(value);
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
    if (this.position === 'horizontal') {
      this.$scaleValues.css({
        width: (scaleSize / 10) * 11,
        transform: `translateX(-${scaleSize / 20}px)`,
      });
    } else if (this.position === 'vertical') {
      this.$scaleValues.css({
        height: (scaleSize / 10) * 11,
        transform: `translateY(-${scaleSize / 20}px)`,
      });
    }
  }

  updatePosition(position: string) {
    this.$scaleValues.removeClass(`scale-values_${this.position}`);
    this.position = position;
    this.$scaleValues.addClass(`scale-values_${this.position}`);
    if (this.position === 'horizontal') {
      this.$scaleValues.css({ height: 'auto' });
      this.symbol = '|';
      this.$scaleValues.find('.scale-values__symbol').text(this.symbol);
    } else if (this.position === 'vertical') {
      this.$scaleValues.css({ width: 'auto' });
      this.symbol = '—';
      this.$scaleValues.find('.scale-values__symbol').text(this.symbol);
    }
  }

  handleScaleValues(e: JQuery.Event): void {
    if (this.position === 'horizontal') {
      this.$this.trigger('clickScaleValues', { position: e.pageX });
    } else if (this.position === 'vertical') {
      this.$this.trigger('clickScaleValues', { position: e.pageY });
    }
  }
}

export {
  ScaleValues,
};
