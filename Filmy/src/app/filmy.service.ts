import { Injectable } from '@angular/core';
import { Film } from './modele/film';
@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    {id: 0, tytul: 'Titatnic', opis: 'Rok 1912, brytyjski statek Titanic wyrusza w swój dziewiczy rejs do USA. Na pokładzie emigrant Jack przypadkowo spotyka arystokratkę Rose.', rok: 1997},
    {id: 1, tytul: 'Terminator', opis: 'Elektroniczny morderca zostaje wysłany z przyszłości do roku 1984, by zabić matkę przyszłego lidera rewolucji. W ślad za nim rusza Kyle Reese, który ma chronić kobietę.', rok: 1984},
    {id: 2, tytul: 'Avatar', opis: 'Jake, sparaliżowany były komandos, otrzymuje misję i zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością oraz postanawia jej pomóc.', rok: 2009},
  ];

  constructor() { }

  wszystkieFilmy() {
    return this.filmy;
  }
}
