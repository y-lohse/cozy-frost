export class Bookmarklet{
	appPath = '';
 
 	constructor(){
		this.appPath = window.location.origin + window.location.pathname;
	}
}