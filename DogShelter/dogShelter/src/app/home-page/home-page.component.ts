import { Component} from '@angular/core';
import {DogServiceService} from '../dog-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [DogServiceService]
})
export class HomePageComponent {
  str = '';
  vis = true;
  // srch = '';

  constructor(private dogService: DogServiceService) {}
    toogleVis() {
      console.log('close');
      this.vis = !this.vis;
    }
    searchStrChange($event) {
      this.str = $event.str;
    }
}
