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
    this.$inputElement = $inputElement;

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

    this.$slider = this.slider.getSlider();
    this.$scale = this.scale.getScale();
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
    this.$progressBar = this.progressBar.getProgressBar();

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
    this.$this.on('clickScale', (_, { position }) => this.handleSliderClickScale(position));
    this.$this.on('clickProgressBar', (_, { position }) => this.handleSliderClickProgressBar(position));
    this.$inputElement.on('change', (e) => this.handleInputElementChange(e));
    $(window).on('resize', () => this.handleWindowResize());
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
    this.$this.find('.slider__runner').remove();
    if (this.isShowValueWindow) {
      this.$this.find('.slider__value-window').remove();
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
    this.$this.find('.slider__runner').remove();
    if (this.isShowValueWindow) {
      this.$this.find('.slider__value-window').remove();
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

  updatePosition(position: string) {
    this.$this
      .children('.slider')
      .removeClass(`slider_${this.position}`)
      .addClass(`slider_${position}`);
    this.position = position;
    this.dataCollection();
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

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    } else if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
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
      this.$inputElement.val(`${this.currentValue[0]}`);
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
        this.currentValue[0], this.viewCurrentValue[0] * this.unit,
      );
    }

    if (this.$inputElement.length !== 0) {
      const minValue = Math.sign(this.currentValue[0]) === -1 ? `(${this.currentValue[0]})` : `${this.currentValue[0]}`;
      const maxValue = Math.sign(this.currentValue[1]) === -1 ? `(${this.currentValue[1]})` : `${this.currentValue[1]}`;
      this.$inputElement.val(`${minValue} - ${maxValue}`);
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

    if (this.$inputElement.length !== 0) {
      const minValue = Math.sign(this.currentValue[0]) === -1 ? `(${this.currentValue[0]})` : `${this.currentValue[0]}`;
      const maxValue = Math.sign(this.currentValue[1]) === -1 ? `(${this.currentValue[1]})` : `${this.currentValue[1]}`;
      this.$inputElement.val(`${minValue} - ${maxValue}`);
    }
  }

  handleSliderUpdatePositionRunner(positionRunner: number) {
    this.$this.trigger('updateCurrentValue', {
      currentValue:
        Math.round(
          (positionRunner - this.scaleOffset) / this.unit / this.step,
        ) * this.step + this.minValue,
    });
  }

  handleSliderUpdatePositionRunnerMin(positionRunner: number) {
    this.$this.trigger('updateCurrentValueMin', {
      currentValueMin:
      Math.round(
        (positionRunner - this.scaleOffset) / this.unit / this.step,
      ) * this.step + this.minValue,
    });
  }

  handleSliderUpdatePositionRunnerMax(positionRunner: number) {
    this.$this.trigger('updateCurrentValueMax', {
      currentValueMax:
      Math.round(
        (positionRunner - this.scaleOffset) / this.unit / this.step,
      ) * this.step + this.minValue,
    });
  }

  handleSliderClickScale(position: number) {
    if (this.isCurrentValue()) {
      this.$this.trigger('updateCurrentValue', {
        currentValue:
        Math.round(
          (position - this.scaleOffset) / this.unit / this.step,
        ) * this.step + this.minValue,
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
          currentValueMin:
          Math.round(
            (position - this.scaleOffset) / this.unit / this.step,
          ) * this.step + this.minValue,
        });
      } else if (max > min) {
        this.$this.trigger('updateCurrentValueMax', {
          currentValueMax:
          Math.round(
            (position - this.scaleOffset) / this.unit / this.step,
          ) * this.step + this.minValue,
        });
      }
    }
  }

  handleSliderClickProgressBar(position: number) {
    if (this.isCurrentValue()) {
      this.$this.trigger('updateCurrentValue', {
        currentValue:
        Math.round(
          (position - this.scaleOffset) / this.unit / this.step,
        ) * this.step + this.minValue,
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
          currentValueMin:
          Math.round(
            (position - this.scaleOffset) / this.unit / this.step,
          ) * this.step + this.minValue,
        });
      } else if (max > min) {
        this.$this.trigger('updateCurrentValueMax', {
          currentValueMax:
          Math.round(
            (position - this.scaleOffset) / this.unit / this.step,
          ) * this.step + this.minValue,
        });
      }
    }
  }

  handleInputElementChange(e: JQuery.ChangeEvent) {
    if (this.isCurrentValue()) {
      const currentValue = String($(e.currentTarget).val()).match(/\d+/g);
      this.$this.trigger('updateCurrentValue', { currentValue });
    } else if (this.isCurrentValues()) {
      const currentValueMin = Number(String($(e.currentTarget).val()).split('-')[0].match(/\d+/g));
      const currentValueMax = Number(String($(e.currentTarget).val()).split('-')[1].match(/\d+/g));
      this.$this.trigger('updateCurrentValueMin', { currentValueMin });
      this.$this.trigger('updateCurrentValueMax', { currentValueMax });
    }
  }

  handleWindowResize() {
    this.dataCollection();

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    } else if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }
  }
}

export {
  View,
};
