import {inject} from 'aurelia-framework';
import {ArchivesDB} from 'ArchivesDB';

@inject(ArchivesDB)
export class AddArchiveForm{
	url = '';
	href = '';
 
 	constructor(ArchivesDB){
		this.ArchivesDB = ArchivesDB;
		this.href = window.location.href;
	}
	submit(){
		this.ArchivesDB.add(this.url);
		this.url = '';
	}
}