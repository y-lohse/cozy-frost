import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Archives{
	archives = [];

	constructor(http){
		this.archives.push({
			'url': 'lol.com'
		});
		
		http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('/');
		});
		
		this.http = http;
	}
	activate(){
		return this.http.fetch('archives')
		.then(response => response.json())
		.then(archives => this.archives = archives);
	}
}