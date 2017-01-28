import tpl from './header.component.html';

class HeaderController {
  constructor() {
    this.headerMessage = 'This is Header';
  }
}

const header = {
  controller: HeaderController,
  controllerAs: 'vm',
  template: tpl
};

export default header;
