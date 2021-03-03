import './index.scss';

import { PanelConfiguration } from './components/panel-configuration/PanelConfiguration';

$('.panel-configuration').each((_, el: HTMLElement) => {
  new PanelConfiguration(el);
});
