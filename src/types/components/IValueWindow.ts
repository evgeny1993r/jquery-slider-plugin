interface IValueWindow {
  getValueWindow(): JQuery
  renderValueWindow(currentValue: number, indentValue: number): void
  updateOrientation(orientation: 'horizontal' | 'vertical'): void
}

export {
  IValueWindow,
};
