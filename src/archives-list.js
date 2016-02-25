import {inject} from 'aurelia-framework';
import {ArchivesDB} from 'ArchivesDB';

@inject(ArchivesDB)
export class ArchivesList{
	archives = [];

	constructor(ArchivesDB){
		this.ArchivesDB = ArchivesDB;
	}
	created(){
		this.archives = this.ArchivesDB.getArchives();
	}
	removeArchive(archive){
		this.ArchivesDB.remove(archive);
	}
}