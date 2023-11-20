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

    get tags(){
      return this.gifsServive.tagsHistory;
    }

}
