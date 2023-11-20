import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class GifsService {
  constructor() { }
  private _tagsHistory: string[] = []
private apiKey: string = 'fdH6QfGGBgY78CiUOFqseWVtbLwoXTDh'


get tagHistory(){
  return [...this._tagsHistory];
}
private organizeHistori(tag: string){
  tag = tag.toLowerCase();

if(this._tagsHistory.includes(tag)){
  this._tagsHistory = this._tagsHistory.filter((oldTag)=> oldTag !== tag)

}
this._tagsHistory.unshift(tag);
this._tagsHistory = this._tagsHistory.splice(0,10);
}

serachTag(tag: string):void{
if (tag.length === 0 ) return;

this.organizeHistori(tag);

//console.log(this.tagHistory)
}
}
