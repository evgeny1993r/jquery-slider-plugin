import './scale.scss';

class Scale {
  $this: JQuery;
  position: string;
  $scale: JQuery;

  constructor($this: JQuery, position: string) {
    this.$this = $this;
    this.position = position;
    this.$scale = $('<div />', {
      class: `scale scale_${position}`,
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

  updatePosition(position: string) {
    this.$scale.removeClass(`scale_${this.position}`);
    this.position = position;
    this.$scale.addClass(`scale_${this.position}`);
  }
}

export {
  Scale,
};
