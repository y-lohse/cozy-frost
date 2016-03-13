export class App {
  configureRouter(config, router) {
    config.title = 'Frost';
    config.map([
      {
		  route: [''], 
		  name: 'index',     
		  moduleId: 'views/index',      
		  nav: true, 
		  title: 'Frost'
	  },
      {
		  route: ['/snapshot/:id'],
		  name: 'snapshot',
		  moduleId: 'views/snapshot',
		  nav: true, 
		  title: 'Frost',
		  href: 'a'
	  },
    ]);

    this.router = router;
  }
}
