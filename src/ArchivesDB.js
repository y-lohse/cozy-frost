import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ArchivesDB{
	archives = [];

	constructor(http){
		http.configure(config => {
			config
				.useStandardConfiguration();
		});
		
		this.http = http;
		
		this.http.fetch('snapshots')
		.then(response => response.json())
		.then(archives => {
			archives.forEach(archive => {
				this.archives.push(archive);
			});
		});
	}
	getArchives(){
		return this.archives;
	}
	add(url){
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		return this.http.fetch('snapshot', {
			method: 'post',
			headers: myHeaders,
			body: JSON.stringify({
				url: url
			})
		})
		.then(response => response.json())
		.then(archive => {
			this.archives.push(archive);
		});
	}
	remove(archive){
		this.http.fetch('snapshot/' + archive._id, {
			method: 'DELETE'
		})
		.then(response => {
			this.archives.splice(this.archives.indexOf(archive), 1);
		});
	}
	get(id){
		return this.http.fetch('snapshot/' + id, {
			method: 'GET'
		})
		.then(response => response.json());
	}
}