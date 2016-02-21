export class App {
  configureRouter(config, router) {
    config.title = 'Cozy Archives';
    config.map([
      { route: [''], name: 'archives',      moduleId: 'archives',      nav: true, title: 'Cozy Archives' },
    ]);

    this.router = router;
  }
}
