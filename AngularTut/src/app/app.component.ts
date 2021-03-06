import { Component, OnInit, OnDestroy } from '@angular/core';
import { OsobyService } from './osoby.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularTut';
  wyswietl = false;
  osoby = [];
  urodzony = new Date(1984, 1, 2);
  kasa = 2.23;

  constructor( private osobyService:OsobyService ) {}

  ngOnInit(){
    console.log('komponent init');
    this.osoby = this.osobyService.wszystkieOsoby();
  }
  ngOnDestroy() {
    console.log('komponent zniszczony');
  }

  wyslij = function() {
    this.wyswietl = !this.wyswietl;
  }
}
