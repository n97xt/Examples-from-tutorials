import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {

  naszObservable$ = new Observable( observer => {
    observer.next();
  });

  private osobyService = [
    {imie: 'Krystian', wiek: 21},
    {imie: 'Damian', wiek: 34},
    {imie: 'Romek', wiek: 32},
    {imie: 'Darek', wiek: 41},
  ]
  constructor() { }

  wszystkieOsoby() {
    return this.osobyService;
  }
}
