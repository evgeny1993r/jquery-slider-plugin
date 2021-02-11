import { Observer } from '../../observer/Observer';

import './scale.scss';

class Scale extends Observer {
  orientation: string;
  $scale: JQuery;

  constructor(orientation: string) {
    super();
    this.orientation = orientation;
    this.$scale = $('<div />', {
      class: `scale scale_${orientation}`,
      on: {
        click: (e: JQuery.Event) => this.handleScaleClick(e),
      },
    });
  }

  getScale(): JQuery {
    return this.$scale;
  }

  handleScaleClick(e: JQuery.Event) {
    if (this.orientation === 'horizontal') {
      this.broadcast({ type: 'clickScale', value: e.pageX });
    } else if (this.orientation === 'vertical') {
      this.broadcast({ type: 'clickScale', value: e.pageY });
    }
  }

  updateOrientation(orientation: 'horizontal' | 'vertical') {
    this.$scale.removeClass(`scale_${this.orientation}`);
    this.orientation = orientation;
    this.$scale.addClass(`scale_${this.orientation}`);
  }
}

export {
  Scale,
};
