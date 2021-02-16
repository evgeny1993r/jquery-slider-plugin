type SetCurrentValue = {
  type: 'setCurrentValue',
  value: number,
};

type SetCurrentValueMin = {
  type: 'setCurrentValueMin',
  value: number,
};

type SetCurrentValueMax = {
  type: 'setCurrentValueMax',
  value: number,
};

type UpdateView = SetCurrentValue | SetCurrentValueMin | SetCurrentValueMax;

export {
  UpdateView,
};
