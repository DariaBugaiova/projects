import { Component} from '@angular/core';
import {Dog} from '../dog';
import {DogServiceService} from '../dog-service.service';

@Component({
  selector: 'app-form-push-card',
  templateUrl: './form-push-card.component.html',
  styleUrls: ['./form-push-card.component.css'],
  providers: [DogServiceService, Dog]
})
export class FormPushCardComponent {
  url = 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-1.jpg';
  private vis = true;
  isChecked = false;
  constructor(private dogService: DogServiceService, private dog: Dog) {
  }

  addNewDog() {
    let mydog = new Dog();
    mydog = Object.assign({}, this.dog);

    mydog.url = this.url;
    mydog.isChecked = this.isChecked;

    this.dogService.saveDog(mydog);
    this.dog.breed = '';
    this.dog.age = '';
    this.dog.character_feature = '';

    this.toogleVis();
  }

  toogleVis() {
    console.log('close');
    this.vis = !this.vis;
  }
}
