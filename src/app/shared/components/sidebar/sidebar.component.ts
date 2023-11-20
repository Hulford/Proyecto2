import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  //private
  constructor(private gifsServive: GifsService){}

    get tags(): string[]{
      return this.gifsServive.tagsHistory;
    }

    searchTag( tag: string){
this.gifsServive.searchTag(tag);
    }

}
