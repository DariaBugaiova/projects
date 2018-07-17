import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../dog';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  @Input() str = '';
  @Output() searchStrChange = new EventEmitter<object>();
  data: Dog[];

  constructor() { }

  ngOnInit() {
  }
  update($event) {
    $event.str = this.str;
    this.searchStrChange.emit($event);
  }
}
