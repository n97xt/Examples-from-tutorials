import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularTut';
  wyswietl = false;
  osoby = [];

  ngOnInit(){
    console.log('komponent init');
    this.osoby = [
      {imie: 'Krystian', wiek: 21},
      {imie: 'Damian', wiek: 34},
      {imie: 'Romek', wiek: 32},
      {imie: 'Darek', wiek: 41},
    ]
  }
  ngOnDestroy() {
    console.log('komponent zniszczony');
  }

  wyslij = function() {
    this.wyswietl = !this.wyswietl;
  }
}
