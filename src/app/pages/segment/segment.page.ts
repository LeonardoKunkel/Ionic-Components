import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any>;
  publisher = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.superheroes = this.dataService.getHeroes();
  }

  segmentChanged(ev) {
    // console.log(ev.detail.value);
    // if ( ev.detail.value === 'todos' ) {
    //   return this.publisher = '';
    // }
    this.publisher = ev.detail.value;
  }
}
