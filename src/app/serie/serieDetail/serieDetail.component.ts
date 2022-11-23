import { Component, OnInit,Input } from '@angular/core';
import { SerieDetail } from '../serieDetail';

@Component({
  selector: 'app-serieDetail',
  templateUrl: './serieDetail.component.html',
  styleUrls: ['./serieDetail.component.css'],

})
export class SerieDetailComponent implements OnInit {
  @Input() serieDet : SerieDetail;

  constructor() { }

  ngOnInit() {
  }

}
