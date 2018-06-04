import { Component } from '@angular/core';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {
   display:string = "";
    dogStyle(dog) {
      return {'collection-item': true, 'teal': !dog.leash}
      }
    // dog2 = {name: 'Jimmy', color: 'brown'};

  cardStyle(display:string){
    return{'card':true, 'blue-grey':(display === this.display)}
  }
  isActive(display:string){
    return this.display;
  }
  doBark(name: string) {
    console.log(`${name} has barked`);
  }

  setDisplay(display:string){
    this.display = display;
  }

  dogs:any[] = [{
    "name": "Jimmy Boy",
    "color" : "black",
    "leash": true
  },
    {
      "name": "K Boy",
      "color" : "white",
      "leash": true
    },
    {
      "name": "L Boy",
      "color" : "red",
      "leash": false
    },
    {
      "name": "M Boy",
      "color" : "ruddy",
      "leash": true
    }]
  // changeColorDog1(color){
  //   this.dog1.color = color;
  // }
}
