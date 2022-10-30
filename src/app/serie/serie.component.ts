import { Component, OnInit } from '@angular/core';
import { Serie } from "./serie"
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) { }

  series :Array<Serie>;
  promedio: number = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
}

promedioTemporadaSeries(series: Serie[]): void {

  var suma: number =0;
  const parrafo: HTMLElement = document.getElementById('average')!; // Nodo tbody que tiene el id="courses"

  series.forEach(s => {
      suma = suma + s.seasons
  })

  suma = suma/series.length;
  parrafo.innerHTML =`Seasons average: ${suma}`;


}




  ngOnInit() {
    this.getSeries();
  }

  ngDoCheck(){
    this.promedioTemporadaSeries(this.series);
  }
}
