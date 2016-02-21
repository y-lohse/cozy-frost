import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Archives{
	archives = [];

	constructor(http){
		http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('/');
		});
		
		this.http = http;
	}
	created(){
		return this.http.fetch('archives')
		.then(response => response.json())
		.then(archives => this.archives = archives);
	}
	removeArchive(archive){
		this.http.fetch('archive/' + archive._id, {
			method: 'DELETE'
		})
		.then(function(response){
//			alert(response.ok);
		});
	}
}