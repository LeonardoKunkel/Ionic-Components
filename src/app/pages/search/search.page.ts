import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe( (albumes: any) => {
      this.albumes = albumes;
    });
  }

  onSearchChange( ev ) {
    this.textoBuscar = ev.detail.value;
  }
}
