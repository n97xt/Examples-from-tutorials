import { Injectable } from '@angular/core';
import { Film } from './modele/film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  wszystkieFilmy(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/filmy/`);
  }
  
  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/api/filmy/${id}/`);
  }
}
