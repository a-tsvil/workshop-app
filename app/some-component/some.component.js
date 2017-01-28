class SomeComponentController {
  constructor(someData) {
    console.log('some-component-controller');
    this.message = 'SomeComponentComtroller';
    this.data = someData.someField;
  }
}

SomeComponentController.$inject = [ 'someData' ];

const someComponent = {
  controller: SomeComponentController,
  controllerAs: 'vm',
  template: `
    <div>
      <h1>{{ vm.message }}</h1>
      <span>Data: {{ vm.data }}</span>
    </div>
  `
};

export default someComponent;
