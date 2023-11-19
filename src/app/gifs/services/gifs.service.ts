import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  constructor() { }
  private _tagsHistory: string[] = []

get tagHistory(){
  return [...this._tagsHistory];
}


serachTag(tag: string):void{
this._tagsHistory.unshift(tag);

console.log(this.tagHistory)
}
}
