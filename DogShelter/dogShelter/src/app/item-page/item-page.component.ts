import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogServiceService } from '../dog-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  dogWithId: Dog;
  id: string;
  private routeSubscription: Subscription;
  vis = 'false';
  editing = false;

  constructor(private dogService: DogServiceService, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(param => this.id = param['id']);
   }

  ngOnInit() {
    this.dogWithId = this.dogService.getDogSelect(+ this.id);
  }

  editCard() {
    this.editing = !this.editing;
  }

  changeCard($event) {
    this.dogService.updateDog($event);
    this.editCard();
  }
}
