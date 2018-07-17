import { Component } from '@angular/core';
import {DogServiceService} from './dog-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DogServiceService],
})
export class AppComponent {
  title = 'app';
}
