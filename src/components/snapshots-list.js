import {inject} from 'aurelia-framework';
import {SnapshotsDB} from 'services/SnapshotsDB';

@inject(SnapshotsDB)
export class SnapshotsList{
	snapshots = [];
	loaded = false;
	href = '';

	constructor(SnapshotsDB){
		this.SnapshotsDB = SnapshotsDB;
		this.href = window.location.href;
	}
	created(){
		this.snapshots = this.SnapshotsDB.getAll();
		this.loaded = true;
	}
	removeSnapshot(snapshot){
		this.SnapshotsDB.remove(snapshot);
	}
}

