export class App {
  configureRouter(config, router) {
    config.title = 'Frost';
    config.map([
      {
		  route: [''], 
		  name: 'index',     
		  moduleId: 'index',      
		  nav: true, 
		  title: 'Frost'
	  },
      {
		  route: ['/archive/:id'],
		  name: 'archive',
		  moduleId: 'archive',
		  nav: true, 
		  title: 'Frost',
		  href: 'a'
	  },
    ]);

    this.router = router;
  }
}
