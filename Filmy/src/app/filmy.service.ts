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
  private token: String = 'dfab3fc305f48753fae8183746ee3a6d789e73b9';
  private httpHeaders = new HttpHeaders(
    {'Authorization': `Token ${this.token}`}
  );

  constructor(private http: HttpClient) { }

  wszystkieFilmy(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/filmy/`, 
    {headers: this.httpHeaders});
  }
  
  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/api/filmy/${id}/`, 
    {headers: this.httpHeaders});
  }
}
