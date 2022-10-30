import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Serie } from "./serie"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
 private apiUrl = environment.baseUrl + 'series.json';


  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }
}
