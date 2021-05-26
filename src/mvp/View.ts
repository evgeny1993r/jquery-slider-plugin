import { Observer } from '../observer/Observer';
import { IUpdateView } from '../types/observer/IUpdateView';
import { Slider } from '../components/slider/Slider';
import { Scale } from '../components/scale/Scale';
import { ProgressBar } from '../components/progress-bar/ProgressBar';
import { Runner } from '../components/runner/Runner';
import { ValueWindow } from '../components/value-window/ValueWindow';
import { ScaleValues } from '../components/scale-values/ScaleValues';

interface IParameters {
  $this: JQuery;
  orientation: 'horizontal' | 'vertical';
  minValue: number;
  maxValue: number;
  currentValue: [number, number?];
  step: number;
  isShowValueWindow: boolean;
  isShowScaleValues: boolean;
}

class View extends Observer<IUpdateView> {
  private $this: JQuery;
  private orientation: 'horizontal' | 'vertical';
  private minValue: number;
  private maxValue: number;
  private currentValue: [number, number?];
  private viewMinValue: number;
  private viewMaxValue: number;
  private viewCurrentValue: [number, number?];
  private step: number;
  private isShowValueWindow: boolean;
  private isShowScaleValues: boolean;

  private slider: Slider;
  private scale: Scale;
  private progressBar: ProgressBar;
  private runner: Runner;
  private runnerMin: Runner;
  private runnerMax: Runner;
  private valueWindow: ValueWindow;
  private valueWindowMin: ValueWindow;
  private valueWindowMax: ValueWindow;
  private scaleValues: ScaleValues;

  private $slider: JQuery;
  private $scale: JQuery;
  private $progressBar: JQuery;
  private $runner: JQuery;
  private $runnerMin: JQuery;
  private $runnerMax: JQuery;
  private $valueWindow: JQuery;
  private $valueWindowMin: JQuery;
  private $valueWindowMax: JQuery;
  private $scaleValues: JQuery;

  private scaleSize: number;
  private scaleOffset: number;
  private unit: number;

  constructor({
    $this,
    orientation,
    minValue,
    maxValue,
    currentValue,
    step,
    isShowValueWindow,
    isShowScaleValues,
  }: IParameters) {
    super();
    this.$this = $this;
    this.orientation = orientation;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
    this.viewMinValue = this.minValue - this.minValue;
    this.viewMaxValue = this.maxValue - this.minValue;
    if (this.isCurrentValue()) {
      this.viewCurrentValue = [this.currentValue[0] - this.minValue];
    }
    if (this.isCurrentValues()) {
      this.viewCurrentValue = [
        this.currentValue[0] - this.minValue,
        this.currentValue[1] - this.minValue,
      ];
    }
    this.step = step;
    this.isShowValueWindow = isShowValueWindow;
    this.isShowScaleValues = isShowScaleValues;

    this.slider = new Slider(this.orientation);
    this.scale = new Scale(this.orientation);
    this.progressBar = new ProgressBar(this.orientation);
    if (this.isCurrentValue()) {
      this.runner = new Runner(this.orientation);
    }
    if (this.isCurrentValue() && this.isShowValueWindow) {
      this.valueWindow = new ValueWindow(this.orientation);
    }
    if (this.isCurrentValues()) {
      this.runnerMin = new Runner(this.orientation);
      this.runnerMax = new Runner(this.orientation);
    }
    if (this.isCurrentValues() && this.isShowValueWindow) {
      this.valueWindowMin = new ValueWindow(this.orientation);
      this.valueWindowMax = new ValueWindow(this.orientation);
    }
    if (this.isShowScaleValues) {
      this.scaleValues = new ScaleValues(
        this.orientation,
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
    }
    if (this.isCurrentValue() && this.isShowValueWindow) {
      this.$valueWindow = this.valueWindow.getValueWindow();
    }
    if (this.isCurrentValues()) {
      this.$runnerMin = this.runnerMin.getRunner();
      this.$runnerMax = this.runnerMax.getRunner();
    }
    if (this.isCurrentValues() && this.isShowValueWindow) {
      this.$valueWindowMin = this.valueWindowMin.getValueWindow();
      this.$valueWindowMax = this.valueWindowMax.getValueWindow();
    }
    if (this.isShowScaleValues) {
      this.$scaleValues = this.scaleValues.getScaleValues();
    }

    this.init();
  }

  private init() {
    this.$this
      .append(this.$slider
        .append(this.$scale)
        .append(this.$progressBar));
    if (this.isCurrentValue()) {
      this.$slider.append(this.$runner);
    }
    if (this.isCurrentValue() && this.isShowValueWindow) {
      this.$slider.append(this.$valueWindow);
    }
    if (this.isCurrentValues()) {
      this.$slider
        .append(this.$runnerMin)
        .append(this.$runnerMax);
    }
    if (this.isCurrentValues() && this.isShowValueWindow) {
      this.$slider
        .append(this.$valueWindowMin)
        .append(this.$valueWindowMax);
    }
    if (this.isShowScaleValues) {
      this.$slider.append(this.$scaleValues);
      if (this.orientation === 'horizontal') {
        this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth());
      }
      if (this.orientation === 'vertical') {
        this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight());
      }
    }

    this.dataCollection();

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    }
    if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }

    if (this.runner) {
      this.runner.subscribe(({ type, value }) => {
        if (type === 'updatePositionRunner') {
          this.handleSliderUpdatePositionRunner(value);
        }
      });
    }

    if (this.$runnerMin) {
      this.runnerMin.subscribe(({ type, value }) => {
        if (type === 'updatePositionRunner') {
          this.handleSliderUpdatePositionRunnerMin(value);
        }
      });
    }

    if (this.$runnerMax) {
      this.runnerMax.subscribe(({ type, value }) => {
        if (type === 'updatePositionRunner') {
          this.handleSliderUpdatePositionRunnerMax(value);
        }
      });
    }

    this.scale.subscribe(({ type, value }) => {
      if (type === 'clickScale') {
        this.handleScalesClick(value);
      }
    });

    this.progressBar.subscribe(({ type, value }) => {
      if (type === 'clickScale') {
        this.handleScalesClick(value);
      }
    });

    if (this.$scaleValues) {
      this.scaleValues.subscribe(({ type, value }) => {
        if (type === 'clickScaleValues') {
          this.handleScaleValuesClick(value);
        }
      });
    }

    $(window).on('resize', () => this.handleWindowResize());
  }

  public updateCurrentValue(value: number) {
    if (this.isCurrentValue()) {
      this.currentValue[0] = value;
      this.viewCurrentValue[0] = value - this.minValue;
      this.renderCurrentValue();
    }
    if (this.isCurrentValues()) {
      this.convertSingleValue();
      this.currentValue[0] = value;
      this.viewCurrentValue[0] = value - this.minValue;
      this.renderCurrentValue();
    }
  }

  public updateCurrentValueMin(value: number) {
    if (this.isCurrentValue()) {
      this.convertIntervalValue();
      this.currentValue[0] = value;
      this.viewCurrentValue[0] = value - this.minValue;
      this.renderCurrentValueMin();
    }
    if (this.isCurrentValues()) {
      this.currentValue[0] = value;
      this.viewCurrentValue[0] = value - this.minValue;
      this.renderCurrentValueMin();
    }
  }

  public updateCurrentValueMax(value: number) {
    if (this.isCurrentValue()) {
      this.convertIntervalValue();
      this.currentValue[1] = value;
      this.viewCurrentValue[1] = value - this.minValue;
      this.renderCurrentValueMax();
    }
    if (this.isCurrentValues()) {
      this.currentValue[1] = value;
      this.viewCurrentValue[1] = value - this.minValue;
      this.renderCurrentValueMax();
    }
  }

  public updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$this
      .children('.slider')
      .removeClass(`slider_${this.orientation}`)
      .addClass(`slider_${orientation}`);
    this.orientation = orientation;
    this.scale.updateOrientation(this.orientation);
    this.progressBar.updateOrientation(this.orientation);
    if (this.isCurrentValue()) {
      this.runner.updateOrientation(this.orientation);
    }
    if (this.isCurrentValue() && this.isShowValueWindow) {
      this.valueWindow.updateOrientation(this.orientation);
    }
    if (this.isCurrentValues()) {
      this.runnerMin.updateOrientation(this.orientation);
      this.runnerMax.updateOrientation(this.orientation);
    }
    if (this.isCurrentValues() && this.isShowValueWindow) {
      this.valueWindowMin.updateOrientation(this.orientation);
      this.valueWindowMax.updateOrientation(this.orientation);
    }
    if (this.isShowScaleValues) {
      this.scaleValues.updateOrientation(this.orientation);
    }

    this.dataCollection();

    if (this.isShowScaleValues && this.orientation === 'horizontal') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth());
    }
    if (this.isShowScaleValues && this.orientation === 'vertical') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight());
    }

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    }
    if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }
  }

  public updateMinValue(minValue: number) {
    this.minValue = minValue;
    this.viewMinValue = this.minValue - this.minValue;
    this.viewMaxValue = this.maxValue - this.minValue;

    if (this.isCurrentValue()) {
      this.viewCurrentValue[0] = this.currentValue[0] - this.minValue;
    }
    if (this.isCurrentValues()) {
      this.viewCurrentValue[0] = this.currentValue[0] - this.minValue;
      this.viewCurrentValue[1] = this.currentValue[1] - this.minValue;
    }

    this.dataCollection();

    if (this.scaleValues) {
      this.scaleValues.updateMinMaxValues(this.minValue, this.maxValue);
    }

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    }
    if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }
  }

  public updateMaxValue(maxValue: number) {
    this.maxValue = maxValue;
    this.viewMaxValue = this.maxValue - this.minValue;

    this.dataCollection();

    if (this.scaleValues) {
      this.scaleValues.updateMinMaxValues(this.minValue, this.maxValue);
    }

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    }
    if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }
  }

  public updateStep(step: number) {
    this.step = step;
    if (this.scaleValues) {
      this.scaleValues.updateStep(this.step);
    }
  }

  public updateIsShowValueWindow(isShowValueWindow: boolean) {
    this.isShowValueWindow = isShowValueWindow;
    if (this.isShowValueWindow && this.isCurrentValue()) {
      this.valueWindow = new ValueWindow(this.orientation);
      this.$valueWindow = this.valueWindow.getValueWindow();
      this.$slider.append(this.$valueWindow);

      this.renderCurrentValue();
    }
    if (this.isShowValueWindow && this.isCurrentValues()) {
      this.valueWindowMin = new ValueWindow(this.orientation);
      this.valueWindowMax = new ValueWindow(this.orientation);
      this.$valueWindowMin = this.valueWindowMin.getValueWindow();
      this.$valueWindowMax = this.valueWindowMax.getValueWindow();
      this.$slider
        .append(this.$valueWindowMin)
        .append(this.$valueWindowMax);

      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }
    if (!this.isShowValueWindow && this.isCurrentValue()) {
      delete this.valueWindow;
      delete this.$valueWindow;
      this.$slider.find('.value-window').remove();
    }
    if (!this.isShowValueWindow && this.isCurrentValues()) {
      delete this.valueWindowMin;
      delete this.valueWindowMax;
      delete this.$valueWindowMin;
      delete this.$valueWindowMax;
      this.$slider.find('.value-window').remove();
    }
  }

  public updateIsShowScaleValues(isShowScaleValues: boolean) {
    this.isShowScaleValues = isShowScaleValues;

    if (this.isShowScaleValues) {
      this.scaleValues = new ScaleValues(
        this.orientation,
        this.minValue,
        this.maxValue,
        this.step,
      );
      this.$scaleValues = this.scaleValues.getScaleValues();
      this.$slider.append(this.$scaleValues);
      this.scaleValues.subscribe(({ type, value }) => {
        if (type === 'clickScaleValues') {
          this.handleScaleValuesClick(value);
        }
      });
    }
    if (this.isShowScaleValues && this.orientation === 'horizontal') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth());
    }
    if (this.isShowScaleValues && this.orientation === 'vertical') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight());
    }
    if (!this.isShowScaleValues) {
      delete this.scaleValues;
      delete this.$scaleValues;
      this.$slider.find('.scale-values').remove();
    }
  }

  private convertIntervalValue() {
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

    this.runnerMin = new Runner(this.orientation);
    this.runnerMax = new Runner(this.orientation);
    if (this.isShowValueWindow) {
      this.valueWindowMin = new ValueWindow(this.orientation);
      this.valueWindowMax = new ValueWindow(this.orientation);
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

    this.runnerMin.subscribe(({ type, value }) => {
      if (type === 'updatePositionRunner') {
        this.handleSliderUpdatePositionRunnerMin(value);
      }
    });

    this.runnerMax.subscribe(({ type, value }) => {
      if (type === 'updatePositionRunner') {
        this.handleSliderUpdatePositionRunnerMax(value);
      }
    });
  }

  private convertSingleValue() {
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

    this.runner = new Runner(this.orientation);
    if (this.isShowValueWindow) {
      this.valueWindow = new ValueWindow(this.orientation);
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

    this.runner.subscribe(({ type, value }) => {
      if (type === 'updatePositionRunner') {
        this.handleSliderUpdatePositionRunner(value);
      }
    });
  }

  private isCurrentValue() {
    return this.currentValue.length === 1;
  }

  private isCurrentValues() {
    return this.currentValue.length === 2;
  }

  private dataCollection() {
    if (this.orientation === 'horizontal') {
      this.scaleSize = this.$scale.outerWidth();
      this.scaleOffset = this.$scale.offset().left;
    }
    if (this.orientation === 'vertical') {
      this.scaleSize = this.$scale.outerHeight();
      this.scaleOffset = this.$scale.offset().top;
    }

    this.unit = this.scaleSize / this.viewMaxValue;
  }

  private renderCurrentValue() {
    this.runner.updatePositionRunner(this.viewCurrentValue[0] * this.unit);
    this.progressBar.renderProgressBar(this.viewCurrentValue[0] * this.unit, 0);

    if (this.isShowValueWindow) {
      this.valueWindow.renderValueWindow(
        this.currentValue[0],
        this.viewCurrentValue[0] * this.unit,
      );
    }
  }

  private renderCurrentValueMin() {
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

  private renderCurrentValueMax() {
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

  private handleSliderUpdatePositionRunner(positionRunner: number) {
    this.broadcast({
      type: 'setCurrentValue',
      value: (positionRunner - this.scaleOffset) / this.unit + this.minValue,
    });
  }

  private handleSliderUpdatePositionRunnerMin(positionRunner: number) {
    this.broadcast({
      type: 'setCurrentValueMin',
      value: (positionRunner - this.scaleOffset) / this.unit + this.minValue,
    });
  }

  private handleSliderUpdatePositionRunnerMax(positionRunner: number) {
    this.broadcast({
      type: 'setCurrentValueMax',
      value: (positionRunner - this.scaleOffset) / this.unit + this.minValue,
    });
  }

  private handleScalesClick(position: number) {
    if (this.isCurrentValue()) {
      this.broadcast({
        type: 'setCurrentValue',
        value: (position - this.scaleOffset) / this.unit + this.minValue,
      });
    }
    if (this.isCurrentValues()) {
      const min = this.currentValue[1] - Math.floor(
        (position - this.scaleOffset) / this.unit + this.minValue,
      );
      const max = Math.floor(
        (position - this.scaleOffset) / this.unit,
      ) - this.currentValue[0] + this.minValue;

      if (min > max) {
        this.broadcast({
          type: 'setCurrentValueMin',
          value: (position - this.scaleOffset) / this.unit + this.minValue,
        });
      }
      if (max > min) {
        this.broadcast({
          type: 'setCurrentValueMax',
          value: (position - this.scaleOffset) / this.unit + this.minValue,
        });
      }
    }
  }

  private handleScaleValuesClick(value: number) {
    if (this.isCurrentValue()) {
      this.broadcast({ type: 'setCurrentValue', value });
    }

    if (this.isCurrentValues()) {
      const min = this.currentValue[1] - value + this.minValue;
      const max = value - this.currentValue[0] + this.minValue;

      if (min > max) {
        this.broadcast({
          type: 'setCurrentValueMin',
          value,
        });
      }
      if (max >= min) {
        this.broadcast({
          type: 'setCurrentValueMax',
          value,
        });
      }
    }
  }

  private handleWindowResize() {
    this.progressBar.renderProgressBar(0, 0);
    this.dataCollection();

    if (this.isCurrentValue()) {
      this.renderCurrentValue();
    }
    if (this.isCurrentValues()) {
      this.renderCurrentValueMin();
      this.renderCurrentValueMax();
    }

    if (this.isShowScaleValues && this.orientation === 'horizontal') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth());
    }
    if (this.isShowScaleValues && this.orientation === 'vertical') {
      this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight());
    }
  }

  public getState() {
    return {
      this: this,
      orientation: this.orientation,
      minValue: this.minValue,
      maxValue: this.maxValue,
      currentValue: this.currentValue,
      viewMinValue: this.viewMinValue,
      viewMaxValue: this.viewMaxValue,
      viewCurrentValue: this.viewCurrentValue,
      step: this.step,
      isShowValueWindow: this.isShowValueWindow,
      isShowScaleValues: this.isShowScaleValues,
      scale: this.scale,
      runner: this.runner,
      runnerMin: this.runnerMin,
      runnerMax: this.runnerMax,
      $this: this.$this,
      $runner: this.$runner,
      $runnerMin: this.$runnerMin,
      $runnerMax: this.$runnerMax,
      $valueWindow: this.$valueWindow,
      $valueWindowMin: this.$valueWindowMin,
      $valueWindowMax: this.$valueWindowMax,
      $scaleValues: this.$scaleValues,
    };
  }
}

export {
  View,
};
