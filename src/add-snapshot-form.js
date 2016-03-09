import {inject} from 'aurelia-framework';
import {SnapshotsDB} from 'SnapshotsDB';

@inject(SnapshotsDB)
export class AddSnapshotForm{
	url = '';
	href = '';
 
 	constructor(SnapshotsDB){
		this.SnapshotsDB = SnapshotsDB;
		this.href = window.location.href;
	}
	submit(){
		this.SnapshotsDB.add(this.url);
		this.url = '';
	}
}