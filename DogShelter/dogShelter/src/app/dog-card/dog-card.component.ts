import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DogServiceService} from '../dog-service.service';
import { element } from 'protractor';
import {ItemPageComponent} from '../item-page/item-page.component';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css'],
  providers: [DogServiceService, ItemPageComponent]
})
export class DogCardComponent implements OnInit {
  @Input() dog;
  @Output() orderChange = new EventEmitter<object>();
  @Output() orderChecked = new EventEmitter<object>();

  @Input() id;
  @Input() vis;
  @Input() editing;
  isCheck = false;

  constructor(private dogService: DogServiceService, private itemPageComponent: ItemPageComponent) {}
  private editCard;
  isMarked = false;
  ngOnInit() {
    this.editCard = this.itemPageComponent.editCard;
  }

  markedHeader() {
    if (this.isMarked) {
      this.isMarked = false;
    } else {
      this.isMarked = true;
    }
  }
  change($event) {
    $event.id = this.id;
    this.orderChange.emit($event);
  }
 /// checkbox
  changeCard($event) {
    this.isCheck = !this.isCheck;
    $event.id = this.id;
    $event.isCheck = this.isCheck;
    // if(cbox.checked){
    //   cbox.id = this.id;
      this.orderChecked.emit($event);
    // }
  }
}
