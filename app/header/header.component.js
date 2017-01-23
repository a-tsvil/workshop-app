import tpl from './header.component.html';

class HeaderController {
  constructor() {
    this.headerMessage = 'This is Header';
  }
}

const headerComponent = {
  controller: HeaderController,
  controllerAs: 'hc',
  template: tpl
};

export default headerComponent;
