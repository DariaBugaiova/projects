import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {Dog} from './dog';
import { DOGS } from './mock-info-dogs';


@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  public dogs: Dog[] = new Array<Dog>();
  protected idn: number;
  private locator = (d: Dog, id: number) => d.id === id;

  constructor() {
      // this.dataStream.subscribe(data => this.dogs = data);
   this.dogs = this.getData();
  }

    getData() {
     this.idn = DOGS.length;
     return DOGS;
    }

    getDogs(): Dog[] {
     return this.dogs;

    }

    getDogSelect(id: number): Dog {
      return this.dogs.find(d => this.locator(d, id));
    }

    saveDog(dog: Dog) {
      dog.id = this.generateID();
      const l = this.dogs.push(dog);
      console.log(this.dogs);
    }

    updateDog(dog: Dog) {
    let consistedDog = this.dogs[dog.id];
      for (let key in dog) {
        if (dog[key] === ('' || consistedDog[key])) {
          return;
        } else {
          consistedDog[key] = dog[key];
        }
      }
    }

    generateID() {
      this.idn++;
      return this.idn;
    }

    deleteDog(ownId: number) {
      if (typeof ownId === 'number') {
        this.deleteOneDog(ownId);
      }
      }

    deleteOneDog(ownId: number) {
      const dogDeleted = this.getDogSelect(ownId);
      const id = this.dogs.indexOf(dogDeleted);
      this.dogs.splice(id, 1);
    }

    deleteListOfDogs() {
    let idChecked;
      // ownId.forEach(idCard => this.deleteOneDog(idCard));
      const result = this.getDogs().filter(dog => dog.isChecked);
      console.log(result);
      result.forEach((dog => {
        idChecked = this.dogs.indexOf(dog);
        this.dogs.splice(idChecked, 1);
      })
      );
      console.log(this.dogs);
    }



    setAddChecked(ownId:number) {
      const dogDeleted = this.getDogSelect(ownId);
      dogDeleted.isChecked = true;
    }

    setDeleteChecked(ownId:number) {
      const dogDeleted = this.getDogSelect(ownId);
      dogDeleted.isChecked = false;
    }

  }
