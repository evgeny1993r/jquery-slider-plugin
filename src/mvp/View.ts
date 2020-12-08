import {
  IoptionsView,
  ISlider,
  IScale,
  IProgressBar,
  IRunner,
  IValueWindow,
} from '../types/ViewType';

import { Slider } from '../components/Slider';
import { Scale } from '../components/Scale';
import { ProgressBar } from '../components/ProgressBar';
import { Runner } from '../components/Runner';
import { ValueWindow } from '../components/ValueWindow';

class View {
  $this: JQuery;
  position: string;
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];
  viewMinValue: number;
  viewMaxValue: number;
  viewCurrentValue: [number, number?];
  step: number;
  isShowValueWindow: boolean;
  symbol: string;

  slider: ISlider;
  scale: IScale;
  progressBar: IProgressBar;
  runner: IRunner;
  runnerMin: IRunner;
  runnerMax: IRunner;
  valueWindow: IValueWindow;
  valueWindowMin: IValueWindow;
  valueWindowMax: IValueWindow;

  $slider: JQuery;
  $scale: JQuery;
  $progressBar: JQuery;
  $runner: JQuery;
  $runnerMin: JQuery;
  $runnerMax: JQuery;
  $valueWindow: JQuery;
  $valueWindowMin: JQuery;
  $valueWindowMax: JQuery;
  $inputElement: JQuery;

  scaleSize: number;
  scaleOffset: number;
  unit: number;

  constructor({
    $this,
    position,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
    $inputElement,
    symbol,
  }: IoptionsView) {
    this.$this = $this;
    this.position = position;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
    this.viewMinValue = this.minValue - this.minValue;
    this.viewMaxValue = this.maxValue - this.minValue;
    if (this.currentValue.length === 1) {
      this.viewCurrentValue = [this.currentValue[0] - this.minValue];
    } else if (this.currentValue.length === 2) {
      this.viewCurrentValue = [
        this.currentValue[0] - this.minValue,
        this.currentValue[1] - this.minValue,
      ];
    }
    this.step = step;
    this.isShowValueWindow = isShowValueWindow;
    this.$inputElement = $inputElement;
    this.symbol = symbol;

    this.slider = new Slider(this.position);
    this.scale = new Scale(this.$this, this.position);
    this.progressBar = new ProgressBar(this.$this, this.position);
    if (this.currentValue.length === 1) {
      this.runner = new Runner(this.$this, 'updatePositionRunner', this.position);
      if (this.isShowValueWindow) {
        this.valueWindow = new ValueWindow(this.position);
      }
    } else if (this.currentValue.length === 2) {
      this.runnerMin = new Runner(this.$this, 'updatePositionRunnerMin', this.position);
      this.runnerMax = new Runner(this.$this, 'updatePositionRunnerMax', this.position);
      if (this.isShowValueWindow) {
        this.valueWindowMin = new ValueWindow(this.position);
        this.valueWindowMax = new ValueWindow(this.position);
      }
    }

    this.$slider = this.slider.getSlider();
    this.$scale = this.scale.getScale();
    if (this.currentValue.length === 1) {
      this.$runner = this.runner.getRunner();
      if (this.isShowValueWindow) {
        this.$valueWindow = this.valueWindow.getValueWindow();
      }
    } else if (this.currentValue.length === 2) {
      this.$runnerMin = this.runnerMin.getRunner();
      this.$runnerMax = this.runnerMax.getRunner();
      if (this.isShowValueWindow) {
        this.$valueWindowMin = this.valueWindowMin.getValueWindow();
        this.$valueWindowMax = this.valueWindowMax.getValueWindow();
      }
    }
    this.$progressBar = this.progressBar.getProgressBar();

    this.init();
  }

  init() {
    this.$this
      .append(this.$slider
        .append(this.$scale)
        .append(this.$progressBar));
    if (this.currentValue.length === 1) {
      this.$slider.append(this.$runner);
      if (this.isShowValueWindow) {
        this.$slider.append(this.$valueWindow);
      }
    } else if (this.currentValue.length === 2) {
      this.$slider
        .append(this.$runnerMin)
        .append(this.$runnerMax);
      if (this.isShowValueWindow) {
        this.$slider
          .append(this.$valueWindowMin)
          .append(this.$valueWindowMax);
      }
    }

    this.dataCollection();

    if (this.currentValue.length === 1) {
      this.renderCurrentValue();
    } else if (this.currentValue.length === 2) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }

    this.$this.on('updatePositionRunner', (_, { positionRunner }) => {
      this.$this.trigger('updateCurrentValue', {
        currentValue:
          Math.round((positionRunner - this.scaleOffset) / this.unit / this.step) * this.step,
      });
    });

    this.$this.on('updatePositionRunnerMin', (_, { positionRunner }) => {
      this.$this.trigger('updateCurrentValueMin', {
        currentValueMin:
          Math.round((positionRunner - this.scaleOffset) / this.unit / this.step) * this.step,
      });
    });

    this.$this.on('updatePositionRunnerMax', (_, { positionRunner }) => {
      this.$this.trigger('updateCurrentValueMax', {
        currentValueMax:
          Math.round((positionRunner - this.scaleOffset) / this.unit / this.step) * this.step,
      });
    });

    this.$this.on('clickScale', (_, { position }) => {
      if (this.currentValue.length === 1) {
        this.$this.trigger('updateCurrentValue', {
          currentValue:
            Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
        });
      } else if (this.currentValue.length === 2) {
        if (this.position === 'horizontal' && position < this.$runnerMin.offset().left) {
          this.$this.trigger('updateCurrentValueMin', {
            currentValueMin:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        } else if (this.position === 'horizontal' && position > this.$runnerMin.offset().left) {
          this.$this.trigger('updateCurrentValueMax', {
            currentValueMax:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        } else if (this.position === 'vertical' && position < this.$runnerMin.offset().top) {
          this.$this.trigger('updateCurrentValueMin', {
            currentValueMin:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        } else if (this.position === 'vertical' && position > this.$runnerMin.offset().top) {
          this.$this.trigger('updateCurrentValueMax', {
            currentValueMax:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        }
      }
    });

    this.$this.on('clickProgressBar', (_, { position }) => {
      if (this.currentValue.length === 1) {
        this.$this.trigger('updateCurrentValue', {
          currentValue:
            Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
        });
      } else if (this.currentValue.length === 2) {
        const min = this.currentValue[1] - Math.floor((position - this.scaleOffset) / this.unit);
        const max = Math.floor((position - this.scaleOffset) / this.unit) - this.currentValue[0];
        if (min > max) {
          this.$this.trigger('updateCurrentValueMin', {
            currentValueMin:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        } else if (max > min) {
          this.$this.trigger('updateCurrentValueMax', {
            currentValueMax:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        }
      }
    });

    this.$inputElement.on('change', (e) => {
      if (this.currentValue.length === 1) {
        const currentValue = String($(e.currentTarget).val()).match(/\d+/g);
        this.$this.trigger('updateCurrentValue', { currentValue });
      } else if (this.currentValue.length === 2) {
        const currentValueMin = Number(String($(e.currentTarget).val()).split('-')[0].match(/\d+/g));
        const currentValueMax = Number(String($(e.currentTarget).val()).split('-')[1].match(/\d+/g));
        this.$this.trigger('updateCurrentValueMin', { currentValueMin });
        this.$this.trigger('updateCurrentValueMax', { currentValueMax });
      }
    });
  }

  dataCollection() {
    if (this.position === 'horizontal') {
      this.scaleSize = this.$scale.outerWidth();
      this.scaleOffset = this.$scale.offset().left;
    } else if (this.position === 'vertical') {
      this.scaleSize = this.$scale.outerHeight();
      this.scaleOffset = this.$scale.offset().top;
    }

    this.unit = this.scaleSize / this.viewMaxValue;
  }

  updateCurrentValue(value: number) {
    this.currentValue[0] = value;
    this.viewCurrentValue[0] = value - this.minValue;
    this.renderCurrentValue();
  }

  renderCurrentValue() {
    this.runner.updatePositionRunner(this.viewCurrentValue[0] * this.unit);
    this.progressBar.renderProgressBar(this.viewCurrentValue[0] * this.unit, 0);

    if (this.isShowValueWindow) {
      this.valueWindow.renderValueWindow(
        this.currentValue[0],
        this.viewCurrentValue[0] * this.unit,
      );
    }

    if (this.$inputElement.length !== 0) {
      const value = String(this.currentValue[0]).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
      this.$inputElement.val(`${value}${this.symbol}`);
    }
  }

  updateCurrentValueMin(value: number) {
    this.currentValue[0] = value;
    this.viewCurrentValue[0] = value - this.minValue;
    this.renderCurrentValueMin();
  }

  renderCurrentValueMin() {
    this.runnerMin.updatePositionRunner(this.viewCurrentValue[0] * this.unit);
    this.progressBar.renderProgressBar(
      (this.viewCurrentValue[1] - this.viewCurrentValue[0]) * this.unit,
      this.viewCurrentValue[0] * this.unit,
    );

    if (this.isShowValueWindow) {
      this.valueWindowMin.renderValueWindow(
        this.currentValue[0], this.viewCurrentValue[0] * this.unit,
      );
    }

    if (this.$inputElement.length !== 0) {
      const minValue = String(this.currentValue[0]).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
      const maxValue = String(this.currentValue[1]).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
      this.$inputElement.val(`${minValue}${this.symbol} - ${maxValue}${this.symbol}`);
    }
  }

  updateCurrentValueMax(value: number) {
    this.currentValue[1] = value;
    this.viewCurrentValue[1] = value - this.minValue;
    this.renderCurrentValueMax();
  }

  renderCurrentValueMax() {
    this.runnerMax.updatePositionRunner(this.viewCurrentValue[1] * this.unit);
    this.progressBar.renderProgressBar(
      (this.viewCurrentValue[1] - this.viewCurrentValue[0]) * this.unit,
      this.viewCurrentValue[0] * this.unit,
    );

    if (this.isShowValueWindow) {
      this.valueWindowMax.renderValueWindow(
        this.currentValue[1], this.viewCurrentValue[1] * this.unit,
      );
    }

    if (this.$inputElement.length !== 0) {
      const minValue = String(this.currentValue[0]).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
      const maxValue = String(this.currentValue[1]).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
      this.$inputElement.val(`${minValue}${this.symbol} - ${maxValue}${this.symbol}`);
    }
  }
}

export {
  View,
};
