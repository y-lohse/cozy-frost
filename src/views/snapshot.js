import {inject} from 'aurelia-framework';
import {SnapshotsDB} from 'SnapshotsDB';

@inject(SnapshotsDB)
export class Snapshot{
	src = '';

	constructor(SnapshotsDB){
		this.SnapshotsDB = SnapshotsDB;
	}
	activate(params){
		this.SnapshotsDB.get(params.id)
		.then(response => {
			this.src = response.url;
		})
	}
}