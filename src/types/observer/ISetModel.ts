type UpdateCurrentValue = {
  type: 'updateCurrentValue',
  value: number
};

type UpdateCurrentValueMin = {
  type: 'updateCurrentValueMin',
  value: number;
};

type UpdateCurrentValueMax = {
  type: 'updateCurrentValueMax',
  value: number,
};

type UpdateOrientation = {
  type: 'updateOrientation',
  value: 'vertical' | 'horizontal',
};

type UpdateMinValue = {
  type: 'updateMinValue',
  value: number,
};

type UpdateMaxValue = {
  type: 'updateMaxValue',
  value: number,
};

type UpdateStep = {
  type: 'updateStep',
  value: number,
};

type UpdateIsShowValueWindow = {
  type: 'updateIsShowValueWindow',
  value: boolean,
};

type UpdateIsShowScaleValues = {
  type: 'updateIsShowScaleValues',
  value: boolean,
};

type ISetModel =
  UpdateCurrentValue
  | UpdateCurrentValueMin
  | UpdateCurrentValueMax
  | UpdateOrientation
  | UpdateMinValue
  | UpdateMaxValue
  | UpdateStep
  | UpdateIsShowValueWindow
  | UpdateIsShowScaleValues;

export {
  ISetModel,
};
