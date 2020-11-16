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
  minValue: number;
  maxValue: number;
  currentValue: [number];
  viewMinValue: number;
  viewMaxValue: number;
  viewCurrentValue: [number?];

  slider: ISlider;
  scale: IScale;
  progressBar: IProgressBar;
  runner: IRunner;

  $slider: JQuery;
  $scale: JQuery;
  $progressBar: JQuery;
  $runner: JQuery;

  scaleWidth: number;
  scaleOffset: number;
  unit: number;

  constructor({
    $this,
    minValue,
    maxValue,
    currentValue,
  }: IoptionsView) {
    this.$this = $this;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
    this.viewMinValue = this.minValue - this.minValue;
    this.viewMaxValue = this.maxValue - this.minValue;
    this.viewCurrentValue = [this.currentValue[0] - this.minValue];

    this.slider = new Slider();
    this.scale = new Scale(this.$this);
    this.runner = new Runner(this.$this);
    this.progressBar = new ProgressBar(this.$this);

    this.$slider = this.slider.getSlider();
    this.$scale = this.scale.getScale();
    this.$runner = this.runner.getRunner();
    this.$progressBar = this.progressBar.getProgressBar();

    this.init();
  }

  init() {
    this.$this
      .append(this.$slider
        .append(this.$scale)
        .append(this.$progressBar)
        .append(this.$runner));

    this.dataCollection();
    this.updataRender();

    this.$this.on('updataPositionRunner', (e, { positionRunner }) => {
      this.$this.trigger('updataCurrentValue', { currentValue: Math.floor((positionRunner - this.scaleOffset) / this.unit) });
    });
  }

  dataCollection() {
    this.scaleWidth = this.$scale.outerWidth();
    this.scaleOffset = this.$scale.offset().left;
    this.unit = this.scaleWidth / this.viewMaxValue;
  }

  updataCurrentValue(value: number) {
    this.currentValue[0] = value;
    this.viewCurrentValue[0] = value - this.minValue;
    this.updataRender();
  }

  updataRender() {
    this.runner.updataPositionRunner(this.viewCurrentValue[0] * this.unit);
    this.progressBar.updataWidthProgressBar(this.viewCurrentValue[0] * this.unit);
  }
}

export {
  View,
};
