import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class AddArchiveForm{
	url = '';
 
 	constructor(http){
		http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('/');
		});
		
		this.http = http;
	}
	submit(){
		var myHeaders = new Headers();
		myHeaders.append('COntent-Type', 'application/json');
		this.http.fetch('archive', {
			method: 'post',
			headers: myHeaders,
			body: JSON.stringify({
				url: this.url
			})
		})
		.then(function(response){
			
		});
	}
}