import {inject} from 'aurelia-framework';
import {ArchivesDB} from 'ArchivesDB';

@inject(ArchivesDB)
export class AddArchiveForm{
	url = '';
 
 	constructor(ArchivesDB){
		this.ArchivesDB = ArchivesDB;
	}
	submit(){
		this.ArchivesDB.add(this.url);
	}
}