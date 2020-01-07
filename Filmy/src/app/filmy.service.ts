import { Injectable } from '@angular/core';

interface Film {
  id: Number;
  tytul: String;
  rok?: Number;
  opis?: String;
}

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  filmy: Film[] = [{id: 0, tytul: '123', rok: 2005}];

  constructor() { }
}
