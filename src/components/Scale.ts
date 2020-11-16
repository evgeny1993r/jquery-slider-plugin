class Scale {
  $scale: JQuery;

  constructor() {
    this.$scale = $('<div />', {
      class: 'slider__scale',
    });
  }

  getScale(): JQuery {
    return this.$scale;
  }
}

export {
  Scale,
};
