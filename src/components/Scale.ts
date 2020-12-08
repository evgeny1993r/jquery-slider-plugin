class Scale {
  $this: JQuery;
  position: string;
  $scale: JQuery;

  constructor($this: JQuery, position: string) {
    this.$this = $this;
    this.position = position;
    this.$scale = $('<div />', {
      class: 'slider__scale',
      on: {
        click: (e: JQuery.Event) => this.handleScaleClick(e),
      },
    });
  }

  getScale(): JQuery {
    return this.$scale;
  }

  handleScaleClick(e: JQuery.Event) {
    if (this.position === 'horizontal') {
      this.$this.trigger('clickScale', { position: e.pageX });
    } else if (this.position === 'vertical') {
      this.$this.trigger('clickScale', { position: e.pageY });
    }
  }
}

export {
  Scale,
};
