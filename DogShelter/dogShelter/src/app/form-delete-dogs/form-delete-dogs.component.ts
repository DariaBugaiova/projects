import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DogServiceService} from '../dog-service.service';

@Component({
  selector: 'app-form-delete-dogs',
  templateUrl: './form-delete-dogs.component.html',
  styleUrls: ['./form-delete-dogs.component.css']
})
export class FormDeleteDogsComponent implements OnInit {
  // @Output() deleteAction = new EventEmitter<object>();
  @Input() vis;
  @Output() changeVis: EventEmitter<any> = new EventEmitter();


  constructor(private dogService: DogServiceService) { }

  ngOnInit() {
  }

 deleteCards() {
    this.dogService.deleteListOfDogs();
    this.changeVis.emit(null);
 }


}
