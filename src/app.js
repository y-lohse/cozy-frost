export class App {
  configureRouter(config, router) {
    config.title = 'Cozy Archives';
    config.map([
      {
		  route: [''], 
		  name: 'index',     
		  moduleId: 'index',      
		  nav: true, 
		  title: 'Cozy Archives'
	  },
      {
		  route: ['/archive/:id'],
		  name: 'archive',
		  moduleId: 'archive',
		  nav: true, 
		  title: 'Cozy Archives',
		  href: 'a'
	  },
    ]);

    this.router = router;
  }
}
