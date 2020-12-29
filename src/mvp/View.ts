import {
  IoptionsView,
  ISlider,
  IScale,
  IProgressBar,
  IRunner,
  IValueWindow,
  IScaleValues,
} from '../types/ViewType';

import { Slider } from '../components/slider/Slider';
import { Scale } from '../components/scale/Scale';
import { ProgressBar } from '../components/progress-bar/ProgressBar';
import { Runner } from '../components/runner/Runner';
import { ValueWindow } from '../components/value-window/ValueWindow';
import { ScaleValues } from '../components/scale-values/ScaleValues';

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
  isShowScaleValues: boolean;

  slider: ISlider;
  scale: IScale;
  progressBar: IProgressBar;
  runner: IRunner;
  runnerMin: IRunner;
  runnerMax: IRunner;
  valueWindow: IValueWindow;
  valueWindowMin: IValueWindow;
  valueWindowMax: IValueWindow;
  scaleValues: IScaleValues;

  $slider: JQuery;
  $scale: JQuery;
  $progressBar: JQuery;
  $runner: JQuery;
  $runnerMin: JQuery;
  $runnerMax: JQuery;
  $valueWindow: JQuery;
  $valueWindowMin: JQuery;
  $valueWindowMax: JQuery;
  $scaleValues: JQuery;

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
    isShowScaleValues,
  }: IoptionsView) {
    this.$this = $this;
    this.position = position;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
    this.viewMinValue = this.minValue - this.minValue;
    this.viewMaxValue = this.maxValue - this.minValue;
    if (this.isCurrentValue()) {
      this.viewCurrentValue = [this.currentValue[0] - this.minValue];
    } else if (this.isCurrentValues()) {
      this.viewCurrentValue = [
        this.currentValue[0] - this.minValue,
        this.currentValue[1] - this.minValue,
      ];
    }
    this.step = step;
    this.isShowValueWindow = isShowValueWindow;
    this.isShowScaleValues = isShowScaleValues;

    this.slider = new Slider(this.position);
    this.scale = new Scale(this.$this, this.position);
    this.progressBar = new ProgressBar(this.$this, this.position);
    if (this.isCurrentValue()) {
      this.runner = new Runner(this.$this, 'updatePositionRunner', this.position);
      if (this.isShowValueWindow) {
        this.valueWindow = new ValueWindow(this.position);
      }
    } else if (this.isCurrentValues()) {
      this.runnerMin = new Runner(this.$this, 'updatePositionRunnerMin', this.position);
      this.runnerMax = new Runner(this.$this, 'updatePositionRunnerMax', this.position);
      if (this.isShowValueWindow) {
        this.valueWindowMin = new ValueWindow(this.position);
        this.valueWindowMax = new ValueWindow(this.position);
      }
    }
    if (this.isShowScaleValues) {
      this.scaleValues = new ScaleValues(
        this.$this,
        this.position,
        this.minValue,
        this.maxValue,
        this.step,
      );
    }

    this.$slider = this.slider.getSlider();
    this.$scale = this.scale.getScale();
    this.$progressBar = this.progressBar.getProgressBar();
    if (this.isCurrentValue()) {
      this.$runner = this.runner.getRunner();
      if (this.isShowValueWindow) {
        this.$valueWindow = this.valueWindow.getValueWindow();
      }
    } else if (this.isCurrentValues()) {
      this.$runnerMin = this.runnerMin.getRunner();
      this.$runnerMax = this.runnerMax.getRunner();
      if (this.isShowValueWindow) {
        this.$valueWindowMin = this.valueWindowMin.getValueWindow();
        this.$valueWindowMax = this.valueWindowMax.getValueWindow();
      }
    }
    if (this.isShowScaleValues) {
      this.$scaleValues = this.scaleValues.getScaleValues();
    }

    this.init();
  }

  init() {
    this.$this
      .append(this.$slider
        .append(this.$scale)
        .append(this.$progressBar));
    if (this.isCurrentValue()) {
      this.$slider.append(this.$runner);
      if (this.isShowValueWindow) {
        this.$slider.append(this.$valueWindow);
      }
    } else if (this.isCurrentValues()) {
      this.$slider
        .append(this.$runnerMin)
        .append(this.$runnerMax);
      if (this.isShowValueWindow) {
        this.$slider
          .append(this.$valueWindowMin)
          .append(this.$valueWindowMax);
      }
    }
    if (this.isShowScaleValues) {
      this.$slider.append(this.$scaleValues);
      if (this.position === 'horizontal') {
        this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth());
      } else if (this.position === 'vertical') {
        this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight());
      }
    }

    this.dataCollection();

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    } else if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }

    this.$this.on('updatePositionRunner', (_, { positionRunner }) => this.handleSliderUpdatePositionRunner(positionRunner));
    this.$this.on('updatePositionRunnerMin', (_, { positionRunner }) => this.handleSliderUpdatePositionRunnerMin(positionRunner));
    this.$this.on('updatePositionRunnerMax', (_, { positionRunner }) => this.handleSliderUpdatePositionRunnerMax(positionRunner));
    this.$this.on('clickScale', (_, { position }) => this.handleScalesClick(position));
    this.$this.on('clickProgressBar', (_, { position }) => this.handleScalesClick(position));
    this.$this.on('clickScaleValues', (_, { position }) => this.handleScalesClick(position));
    $(window).on('resize', () => this.handleWindowResize());
  }

  updateCurrentValue(value: number) {
    if (this.isCurrentValue()) {
      this.currentValue[0] = value;
      this.viewCurrentValue[0] = value - this.minValue;
      this.renderCurrentValue();
    } else if (this.isCurrentValues()) {
      this.convertSingleValue();
      this.currentValue[0] = value;
      this.viewCurrentValue[0] = value - this.minValue;
      this.renderCurrentValue();
    }
  }

  updateCurrentValueMin(value: number) {
    if (this.isCurrentValue()) {
      this.convertIntervalValue();
      this.currentValue[0] = value;
      this.viewCurrentValue[0] = value - this.minValue;
      this.renderCurrentValueMin();
    } else if (this.isCurrentValues()) {
      this.currentValue[0] = value;
      this.viewCurrentValue[0] = value - this.minValue;
      this.renderCurrentValueMin();
    }
  }

  updateCurrentValueMax(value: number) {
    this.currentValue[1] = value;
    this.viewCurrentValue[1] = value - this.minValue;
    this.renderCurrentValueMax();
  }

  updatePosition(position: string) {
    this.$this
      .children('.slider')
      .removeClass(`slider_${this.position}`)
      .addClass(`slider_${position}`);
    this.position = position;
    this.scale.updatePosition(this.position);
    this.progressBar.updatePosition(this.position);
    if (this.isCurrentValue()) {
      this.runner.updatePosition(this.position);
      if (this.isShowValueWindow) {
        this.valueWindow.updatePosition(this.position);
      }
    }
    if (this.isCurrentValues()) {
      this.runnerMin.updatePosition(this.position);
      this.runnerMax.updatePosition(this.position);
      if (this.isShowValueWindow) {
        this.valueWindowMin.updatePosition(this.position);
        this.valueWindowMax.updatePosition(this.position);
      }
    }
    if (this.isShowScaleValues) {
      this.scaleValues.updatePosition(this.position);
    }

    this.dataCollection();

    if (this.isShowScaleValues && this.position === 'horizontal') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth());
    } else if (this.isShowScaleValues && this.position === 'vertical') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight());
    }

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    } else if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }
  }

  updateMinValue(minValue: number) {
    this.minValue = minValue;
    this.viewMinValue = this.minValue - this.minValue;
    this.viewMaxValue = this.maxValue - this.minValue;

    if (this.isCurrentValue()) {
      this.viewCurrentValue[0] = this.currentValue[0] - this.minValue;
    } else if (this.isCurrentValues()) {
      this.viewCurrentValue[0] = this.currentValue[0] - this.minValue;
      this.viewCurrentValue[1] = this.currentValue[1] - this.minValue;
    }

    this.dataCollection();

    this.scaleValues.updateMinMaxValues(this.minValue, this.maxValue);

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    } else if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }
  }

  updateMaxValue(maxValue: number) {
    this.maxValue = maxValue;
    this.viewMaxValue = this.maxValue - this.minValue;

    this.dataCollection();

    this.scaleValues.updateMinMaxValues(this.minValue, this.maxValue);

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    } else if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }
  }

  updateStep(step: number) {
    this.step = step;
    this.scaleValues.updateStep(this.step);
  }

  updateIsShowValueWindow(isShowValueWindow: boolean) {
    this.isShowValueWindow = isShowValueWindow;

    if (this.isShowValueWindow) {
      if (this.isCurrentValue()) {
        this.valueWindow = new ValueWindow(this.position);
        this.$valueWindow = this.valueWindow.getValueWindow();
        this.$slider.append(this.$valueWindow);

        this.renderCurrentValue();
      } else if (this.isCurrentValues()) {
        this.valueWindowMin = new ValueWindow(this.position);
        this.valueWindowMax = new ValueWindow(this.position);
        this.$valueWindowMin = this.valueWindowMin.getValueWindow();
        this.$valueWindowMax = this.valueWindowMax.getValueWindow();
        this.$slider
          .append(this.$valueWindowMin)
          .append(this.$valueWindowMax);

        this.renderCurrentValueMin();
        this.renderCurrentValueMax();
      }
    } else if (!this.isShowValueWindow) {
      if (this.isCurrentValue()) {
        delete this.valueWindow;
        delete this.$valueWindow;
        this.$slider.find('.value-window').remove();
      } else if (this.isCurrentValues()) {
        delete this.valueWindowMin;
        delete this.valueWindowMax;
        delete this.$valueWindowMin;
        delete this.$valueWindowMax;
        this.$slider.find('.value-window').remove();
      }
    }
  }

  updateIsShowScaleValues(isShowScaleValues: boolean) {
    this.isShowScaleValues = isShowScaleValues;

    if (this.isShowScaleValues) {
      this.scaleValues = new ScaleValues(
        this.$this,
        this.position,
        this.minValue,
        this.maxValue,
        this.step,
      );
      this.$scaleValues = this.scaleValues.getScaleValues();
      this.$slider.append(this.$scaleValues);
      if (this.position === 'horizontal') {
        this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth());
      } else if (this.position === 'vertical') {
        this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight());
      }
    } else if (!this.isShowScaleValues) {
      delete this.scaleValues;
      delete this.$scaleValues;
      this.$slider.find('.scale-values').remove();
    }
  }

  convertIntervalValue() {
    delete this.runner;
    if (this.isShowValueWindow) {
      delete this.valueWindow;
    }
    delete this.$runner;
    if (this.isShowValueWindow) {
      delete this.$valueWindow;
    }
    this.$this.find('.runner').remove();
    if (this.isShowValueWindow) {
      this.$this.find('.value-window').remove();
    }

    this.runnerMin = new Runner(this.$this, 'updatePositionRunnerMin', this.position);
    this.runnerMax = new Runner(this.$this, 'updatePositionRunnerMax', this.position);
    if (this.isShowValueWindow) {
      this.valueWindowMin = new ValueWindow(this.position);
      this.valueWindowMax = new ValueWindow(this.position);
    }
    this.$runnerMin = this.runnerMin.getRunner();
    this.$runnerMax = this.runnerMax.getRunner();
    if (this.isShowValueWindow) {
      this.$valueWindowMin = this.valueWindowMin.getValueWindow();
      this.$valueWindowMax = this.valueWindowMax.getValueWindow();
    }
    this.$slider
      .append(this.$runnerMin)
      .append(this.$runnerMax);
    if (this.isShowValueWindow) {
      this.$slider
        .append(this.$valueWindowMin)
        .append(this.$valueWindowMax);
    }
  }

  convertSingleValue() {
    this.currentValue.splice(1, 1);
    this.viewCurrentValue.splice(1, 1);
    delete this.runnerMin;
    delete this.runnerMax;
    if (this.isShowValueWindow) {
      delete this.valueWindowMin;
      delete this.valueWindowMax;
    }
    delete this.$runnerMin;
    delete this.$runnerMax;
    if (this.isShowValueWindow) {
      delete this.$valueWindowMin;
      delete this.$valueWindowMax;
    }
    this.$this.find('.runner').remove();
    if (this.isShowValueWindow) {
      this.$this.find('.value-window').remove();
    }

    this.runner = new Runner(this.$this, 'updatePositionRunner', this.position);
    if (this.isShowValueWindow) {
      this.valueWindow = new ValueWindow(this.position);
    }
    this.$runner = this.runner.getRunner();
    if (this.isShowValueWindow) {
      this.$valueWindow = this.valueWindow.getValueWindow();
    }
    this.$slider
      .append(this.$runner);
    if (this.isShowValueWindow) {
      this.$slider
        .append(this.$valueWindow);
    }
  }

  isCurrentValue() {
    return this.currentValue.length === 1;
  }

  isCurrentValues() {
    return this.currentValue.length === 2;
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

  renderCurrentValue() {
    this.runner.updatePositionRunner(this.viewCurrentValue[0] * this.unit);
    this.progressBar.renderProgressBar(this.viewCurrentValue[0] * this.unit, 0);

    if (this.isShowValueWindow) {
      this.valueWindow.renderValueWindow(
        this.currentValue[0],
        this.viewCurrentValue[0] * this.unit,
      );
    }
  }

  renderCurrentValueMin() {
    this.runnerMin.updatePositionRunner(this.viewCurrentValue[0] * this.unit);
    this.progressBar.renderProgressBar(
      (this.viewCurrentValue[1] - this.viewCurrentValue[0]) * this.unit,
      this.viewCurrentValue[0] * this.unit,
    );

    if (this.isShowValueWindow) {
      this.valueWindowMin.renderValueWindow(
        this.currentValue[0],
        this.viewCurrentValue[0] * this.unit,
      );
    }
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
  }

  handleSliderUpdatePositionRunner(positionRunner: number) {
    this.$this.trigger('updateCurrentValue', {
      currentValue: (positionRunner - this.scaleOffset) / this.unit + this.minValue,
    });
  }

  handleSliderUpdatePositionRunnerMin(positionRunner: number) {
    this.$this.trigger('updateCurrentValueMin', {
      currentValueMin: (positionRunner - this.scaleOffset) / this.unit + this.minValue,
    });
  }

  handleSliderUpdatePositionRunnerMax(positionRunner: number) {
    this.$this.trigger('updateCurrentValueMax', {
      currentValueMax: (positionRunner - this.scaleOffset) / this.unit + this.minValue,
    });
  }

  handleScalesClick(position: number) {
    if (this.isCurrentValue()) {
      this.$this.trigger('updateCurrentValue', {
        currentValue: (position - this.scaleOffset) / this.unit + this.minValue,
      });
    } else if (this.isCurrentValues()) {
      const min = this.currentValue[1] - Math.floor(
        (position - this.scaleOffset) / this.unit + this.minValue,
      );
      const max = Math.floor(
        (position - this.scaleOffset) / this.unit,
      ) - this.currentValue[0] + this.minValue;

      if (min > max) {
        this.$this.trigger('updateCurrentValueMin', {
          currentValueMin: (position - this.scaleOffset) / this.unit + this.minValue,
        });
      } else if (max > min) {
        this.$this.trigger('updateCurrentValueMax', {
          currentValueMax: (position - this.scaleOffset) / this.unit + this.minValue,
        });
      }
    }
  }

  handleWindowResize() {
    this.progressBar.renderProgressBar(0, 0);
    this.dataCollection();

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    } else if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }

    if (this.isShowScaleValues && this.position === 'horizontal') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth());
    } else if (this.isShowScaleValues && this.position === 'vertical') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight());
    }
  }
}

export {
  View,
};
