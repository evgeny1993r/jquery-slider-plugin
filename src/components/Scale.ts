class Scale {
  $scale: JQuery;

  constructor($this: JQuery, position: string) {
    this.$scale = $('<div />', {
      class: 'slider__scale',
      on: {
        click: (e: JQuery.Event) => {
          if (position === 'horizontal') {
            $this.trigger('clickScale', { position: e.pageX });
          } else if (position === 'vertical') {
            $this.trigger('clickScale', { position: e.pageY });
          }
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
