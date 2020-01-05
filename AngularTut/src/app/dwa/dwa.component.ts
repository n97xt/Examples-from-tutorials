import { Component, OnInit } from '@angular/core';
import { OsobyService } from '../osoby.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(private osobyService:OsobyService,
    private route:ActivatedRoute,
    private location: Location) {}

  ngOnInit(){
    this.kasa = +this.route.snapshot.paramMap.get('kasa'); 
    console.log('komponent init');
    this.osoby = this.osobyService.wszystkieOsoby();
  }

  wyslij = function() {
    this.location.back();
  }

}
