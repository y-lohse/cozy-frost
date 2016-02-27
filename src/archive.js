import {inject} from 'aurelia-framework';
import {ArchivesDB} from 'ArchivesDB';

@inject(ArchivesDB)
export class Archive{
	src = '';

	constructor(ArchivesDB){
		this.ArchivesDB = ArchivesDB;
	}
	activate(params){
		this.ArchivesDB.get(params.id)
		.then(response => {
			this.src = response.url;
		})
	}
}