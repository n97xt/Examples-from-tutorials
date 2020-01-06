import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-jeden',
  templateUrl: './jeden.component.html',
  styleUrls: ['./jeden.component.css']
})
export class JedenComponent implements OnInit {

  naszForm = new FormGroup({
    imie: new FormControl(''),
    nazwisko: new FormControl('')
  });

  klik: Boolean = false;

  wyslij() {
    console.log(this.naszForm.value);
  }

  klikniety(noweDane: boolean) {
    this.klik = noweDane;
  }

  constructor() { }

  ngOnInit() {
  }

}
