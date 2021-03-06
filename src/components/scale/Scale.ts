import { Observer } from '../../observer/Observer';
import { IUpdateScale } from '../../types/observer/IUpdateScale';

import './scale.scss';

class Scale extends Observer<IUpdateScale> {
  private orientation: 'horizontal' | 'vertical';
  private $scale: JQuery;

  constructor(orientation: 'horizontal' | 'vertical') {
    super();
    this.orientation = orientation;
    this.$scale = $('<div />', {
      class: `scale scale_${orientation}`,
      on: {
        click: (e: JQuery.Event) => this.handleScaleClick(e),
      },
    });
  }

  public getScale(): JQuery {
    return this.$scale;
  }

  public updateOrientation(orientation: 'horizontal' | 'vertical'): void {
    this.$scale.removeClass(`scale_${this.orientation}`);
    this.orientation = orientation;
    this.$scale.addClass(`scale_${this.orientation}`);
  }

  private handleScaleClick(e: JQuery.Event): void {
    if (this.orientation === 'horizontal') {
      this.broadcast({ type: 'clickScale', value: e.pageX });
    }
    if (this.orientation === 'vertical') {
      this.broadcast({ type: 'clickScale', value: e.pageY });
    }
  }

  public getState(): { orientation: string } {
    return {
      orientation: this.orientation,
    };
  }
}

export {
  Scale,
};
