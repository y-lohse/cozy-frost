import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ArchivesDB{
	archives = [];

	constructor(http){
		http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('/');
		});
		
		this.http = http;
		
		this.http.fetch('archives')
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
		myHeaders.append('COntent-Type', 'application/json');
		return this.http.fetch('archive', {
			method: 'post',
			headers: myHeaders,
			body: JSON.stringify({
				url: url
			})
		})
		.then(response => {
			this.archives.push({_id: 1, url: url});
		});
	}
	remove(archive){
		this.http.fetch('archive/' + archive._id, {
			method: 'DELETE'
		})
		.then(response => {
			this.archives.splice(this.archives.indexOf(archive), 1);
		});
	}
}