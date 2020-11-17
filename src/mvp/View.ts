import {
  IoptionsView,
  ISlider,
  IScale,
  IProgressBar,
  IRunner,
} from '../types/ViewType';

import { Slider } from '../components/Slider';
import { Scale } from '../components/Scale';
import { ProgressBar } from '../components/ProgressBar';
import { Runner } from '../components/Runner';

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

  slider: ISlider;
  scale: IScale;
  progressBar: IProgressBar;
  runner: IRunner;
  runnerMin: IRunner;
  runnerMax: IRunner;

  $slider: JQuery;
  $scale: JQuery;
  $progressBar: JQuery;
  $runner: JQuery;
  $runnerMin: JQuery;
  $runnerMax: JQuery;

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
  }: IoptionsView) {
    this.$this = $this;
    this.position = position;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
    this.viewMinValue = this.minValue - this.minValue;
    this.viewMaxValue = this.maxValue - this.minValue;
    this.step = step;
    if (this.currentValue.length === 1) {
      this.viewCurrentValue = [this.currentValue[0] - this.minValue];
    } else if (this.currentValue.length === 2) {
      this.viewCurrentValue = [
        this.currentValue[0] - this.minValue,
        this.currentValue[1] - this.minValue,
      ];
    }

    this.slider = new Slider(this.position);
    this.scale = new Scale(this.$this, this.position);
    this.progressBar = new ProgressBar(this.$this, this.position);
    if (this.currentValue.length === 1) {
      this.runner = new Runner(this.$this, 'updataPositionRunner', this.position);
    } else if (this.currentValue.length === 2) {
      this.runnerMin = new Runner(this.$this, 'updataPositionRunnerMin', this.position);
      this.runnerMax = new Runner(this.$this, 'updataPositionRunnerMax', this.position);
    }

    this.$slider = this.slider.getSlider();
    this.$scale = this.scale.getScale();
    if (this.currentValue.length === 1) {
      this.$runner = this.runner.getRunner();
    } else if (this.currentValue.length === 2) {
      this.$runnerMin = this.runnerMin.getRunner();
      this.$runnerMax = this.runnerMax.getRunner();
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
    } else if (this.currentValue.length === 2) {
      this.$slider
        .append(this.$runnerMin)
        .append(this.$runnerMax);
    }

    this.dataCollection();

    if (this.currentValue.length === 1) {
      this.renderCurrentValue();
    } else if (this.currentValue.length === 2) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }

    this.$this.on('updataPositionRunner', (_, { positionRunner }) => {
      this.$this.trigger('updataCurrentValue', {
        currentValue:
          Math.round((positionRunner - this.scaleOffset) / this.unit / this.step) * this.step,
      });
    });

    this.$this.on('updataPositionRunnerMin', (_, { positionRunner }) => {
      this.$this.trigger('updataCurrentValueMin', {
        currentValueMin:
          Math.round((positionRunner - this.scaleOffset) / this.unit / this.step) * this.step,
      });
    });

    this.$this.on('updataPositionRunnerMax', (_, { positionRunner }) => {
      this.$this.trigger('updataCurrentValueMax', {
        currentValueMax:
          Math.round((positionRunner - this.scaleOffset) / this.unit / this.step) * this.step,
      });
    });

    this.$this.on('clickScale', (_, { position }) => {
      if (this.currentValue.length === 1) {
        this.$this.trigger('updataCurrentValue', {
          currentValue:
            Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
        });
      } else if (this.currentValue.length === 2) {
        if (this.position === 'gorizontal' && position < this.$runnerMin.offset().left) {
          this.$this.trigger('updataCurrentValueMin', {
            currentValueMin:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        } else if (this.position === 'gorizontal' && position > this.$runnerMin.offset().left) {
          this.$this.trigger('updataCurrentValueMax', {
            currentValueMax:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        } else if (this.position === 'vertical' && position < this.$runnerMin.offset().top) {
          this.$this.trigger('updataCurrentValueMin', {
            currentValueMin:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        } else if (this.position === 'vertical' && position > this.$runnerMin.offset().top) {
          this.$this.trigger('updataCurrentValueMax', {
            currentValueMax:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        }
      }
    });

    this.$this.on('clickProgressBar', (_, { position }) => {
      if (this.currentValue.length === 1) {
        this.$this.trigger('updataCurrentValue', {
          currentValue:
            Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
        });
      } else if (this.currentValue.length === 2) {
        const min = this.currentValue[1] - Math.floor((position - this.scaleOffset) / this.unit);
        const max = Math.floor((position - this.scaleOffset) / this.unit) - this.currentValue[0];
        if (min > max) {
          this.$this.trigger('updataCurrentValueMin', {
            currentValueMin:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        } else if (max > min) {
          this.$this.trigger('updataCurrentValueMax', {
            currentValueMax:
              Math.round((position - this.scaleOffset) / this.unit / this.step) * this.step,
          });
        }
      }
    });
  }

  dataCollection() {
    if (this.position === 'gorizontal') {
      this.scaleSize = this.$scale.outerWidth();
      this.scaleOffset = this.$scale.offset().left;
    } else if (this.position === 'vertical') {
      this.scaleSize = this.$scale.outerHeight();
      this.scaleOffset = this.$scale.offset().top;
    }

    this.unit = this.scaleSize / this.viewMaxValue;
  }

  updataCurrentValue(value: number) {
    this.currentValue[0] = value;
    this.viewCurrentValue[0] = value - this.minValue;
    this.renderCurrentValue();
  }

  renderCurrentValue() {
    this.runner.updataPositionRunner(this.viewCurrentValue[0] * this.unit);
    this.progressBar.renderProgressBar(this.viewCurrentValue[0] * this.unit, 0);
  }

  updataCurrentValueMin(value: number) {
    this.currentValue[0] = value;
    this.viewCurrentValue[0] = value - this.minValue;
    this.renderCurrentValueMin();
  }

  renderCurrentValueMin() {
    this.runnerMin.updataPositionRunner(this.viewCurrentValue[0] * this.unit);
    this.progressBar.renderProgressBar(
      (this.viewCurrentValue[1] - this.viewCurrentValue[0]) * this.unit,
      this.viewCurrentValue[0] * this.unit,
    );
  }

  updataCurrentValueMax(value: number) {
    this.currentValue[1] = value;
    this.viewCurrentValue[1] = value - this.minValue;
    this.renderCurrentValueMax();
  }

  renderCurrentValueMax() {
    this.runnerMax.updataPositionRunner(this.viewCurrentValue[1] * this.unit);
    this.progressBar.renderProgressBar(
      (this.viewCurrentValue[1] - this.viewCurrentValue[0]) * this.unit,
      this.viewCurrentValue[0] * this.unit,
    );
  }
}

export {
  View,
};
