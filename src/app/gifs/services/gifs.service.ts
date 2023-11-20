import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Gif, SearchResponce } from '../interfaces/gifs.interfaces';


@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[]=[];
  private _tagsHistory: string[] = []
  private apiKey: string = 'fdH6QfGGBgY78CiUOFqseWVtbLwoXTDh'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';


  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)

    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  this.saveLocalStorage();
  }
  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this.tagsHistory) )
  }



  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)


    this.http.get<SearchResponce>(`${this.serviceUrl}/search`,{params})
      .subscribe(resp => {

        this.gifList= resp.data;
        console.log({gifs:this.gifList});

      })



    //('https://api.giphy.com/v1/gifs/search?api_key=fdH6QfGGBgY78CiUOFqseWVtbLwoXTDh&q=valorant&limit=10')


    //console.log(this.tagHistory)
  }
}
