interface JQuery {
  slider(
    key?: IOptions | string,
    value?: | number | [number, number?] | boolean | 'horizontal' | 'vertical',
  ): JQuery;
}

interface IOptions {
  $this?: JQuery;
  orientation?: 'horizontal' | 'vertical';
  minValue?: number;
  maxValue?: number;
  currentValue?: [number];
  step?: number;
  isShowWindowValue?: boolean;
  isShowScaleValues?: boolean;
}
