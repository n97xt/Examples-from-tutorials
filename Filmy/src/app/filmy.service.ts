import { Injectable } from '@angular/core';

interface Film {
  tytul: String;
}

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  filmy: Film[] = [];

  constructor() { }
}
