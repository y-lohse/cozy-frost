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
		alert('submitting');
		this.http.fetch('archive', {
			method: 'post',
			body: JSON.stringify({
				url: this.url
			})
		});
	}
}