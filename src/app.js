export class App {
  configureRouter(config, router) {
    config.title = 'Cozy Archives';
    config.map([
      { route: [''], name: 'index',      moduleId: 'index',      nav: true, title: 'Cozy Archives' },
    ]);

    this.router = router;
  }
}
