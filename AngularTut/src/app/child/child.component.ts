import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() imie: String;
  @Output() zmieniony = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  przeslij() {
    this.zmieniony.emit(true);
  }
}
