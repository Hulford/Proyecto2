import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar</h5>
  <input type="text"
  class="form-control"
  placeholder="buscar gif..."

  >
  `
})

export class SearchBoxComponent {
  constructor() { }


}
