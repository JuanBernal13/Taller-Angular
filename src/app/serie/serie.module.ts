import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serieDetail/serieDetail.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [SerieComponent, SerieDetailComponent],
  exports: [SerieComponent, SerieDetailComponent],
})
export class SerieModule { }
