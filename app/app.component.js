class AppController {
  constructor() {
    this.message = 'Hello Photogramm!';
  }
}

const appComponent = {
  controller: AppController,
  template: `
    <div>
      <h1>{{ $ctrl.message }}</h1>
    </div>
  `
};

export default appComponent;
