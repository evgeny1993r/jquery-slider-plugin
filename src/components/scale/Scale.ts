import './scale.scss';

class Scale {
  position: string;
  $scale: JQuery;

  constructor(position: string) {
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
      this.$scale.trigger('clickScale', { position: e.pageX });
    } else if (this.position === 'vertical') {
      this.$scale.trigger('clickScale', { position: e.pageY });
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
