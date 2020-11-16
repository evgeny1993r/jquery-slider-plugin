class Scale {
  $scale: JQuery;

  constructor($this: JQuery) {
    this.$scale = $('<div />', {
      class: 'slider__scale',
      on: {
        click: (e: JQuery.Event) => {
          $this.trigger('updataPositionRunner', { positionRunner: e.pageX });
        },
      },
    });
  }

  getScale(): JQuery {
    return this.$scale;
  }
}

export {
  Scale,
};
