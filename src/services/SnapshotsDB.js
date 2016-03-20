import {inject} from 'aurelia-framework';
import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class SnapshotsDB{
	snapshots = [];

	constructor(http){
		http.configure(config => {
			config
				.useStandardConfiguration();
		});
		
		this.http = http;
		
		this.http.fetch('snapshots')
		.then(response => response.json())
		.then(snapshots => {
			snapshots.forEach(snapshot => {
				this.snapshots.push(snapshot);
			});
		});
	}
	getAll(){
		return this.snapshots;
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
		.then(snapshot => {
			this.snapshots.push(snapshot);
			if (!snapshot.processed) this.observeSnapshotUntilProcessed(snapshot);
		});
	}
	remove(snapshot){
		this.http.fetch('snapshot/' + snapshot._id, {
			method: 'DELETE'
		})
		.then(response => {
			this.snapshots.splice(this.snapshots.indexOf(snapshot), 1);
		});
	}
	get(id){
		return this.http.fetch('snapshot/' + id, {
			method: 'GET'
		})
		.then(response => response.json());
	}
	getOne(id){
		return this.http.fetch('snapshots/' + id, {
			method: 'GET'
		})
		.then(response => response.json());
	}
	observeSnapshotUntilProcessed(snapshot){
		setTimeout(() => {
			this.getOne(snapshot._id).then(response => {
				if (!response.processed) this.observeSnapshotUntilProcessed(snapshot);
				else{
					this.snapshots.splice(this.snapshots.indexOf(snapshot), 1, response);
				}
			});
		}, 1000);
	}
}