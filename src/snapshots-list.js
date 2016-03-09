import {inject} from 'aurelia-framework';
import {SnapshotsDB} from 'SnapshotsDB';

@inject(SnapshotsDB)
export class SnapshotsList{
	snapshots = [];

	constructor(SnapshotsDB){
		this.SnapshotsDB = SnapshotsDB;
	}
	created(){
		this.snapshots = this.SnapshotsDB.getAll();
	}
	removeSnapshot(snapshot){
		this.SnapshotsDB.remove(snapshot);
	}
}

