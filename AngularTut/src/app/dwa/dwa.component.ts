import { Component, OnInit } from '@angular/core';
import { OsobyService } from '../osoby.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dwa',
  templateUrl: './dwa.component.html',
  styleUrls: ['./dwa.component.css']
})
export class DwaComponent implements OnInit {

  title = 'AngularTut';
  wyswietl = false;
  osoby = [];
  urodzony = new Date(1984, 1, 2);
  kasa = 2.23;

  nowyObservable$ = new Observable( observer => {
    setInterval( () => observer.next( new Date() ), 1000);
  });

  constructor(private osobyService:OsobyService,
    private route:ActivatedRoute,
    private location: Location) {}

  ngOnInit(){
    this.kasa = +this.route.snapshot.paramMap.get('kasa'); 
    console.log('komponent init');
    this.osoby = this.osobyService.wszystkieOsoby();

    this.osobyService.naszObservable$.subscribe(
      dane => {
        this.kasa = 10;
      }
    );
  }

  wyslij = function() {
    this.location.back();
  }

}
