import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {
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
