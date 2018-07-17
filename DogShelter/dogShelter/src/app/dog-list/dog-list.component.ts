import {Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef} from '@angular/core';
import {DogServiceService} from '../dog-service.service';
import {Dog} from '../dog';
import {SearchPipe} from '../search.pipe';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  data: Dog[];

  @Input() vis;
  @Input() str = '';

  constructor(private dogService: DogServiceService, private viewContainerRef: ViewContainerRef,
  private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
   this.data = this.dogService.dogs;
   console.log(this.str);
  }

  deleteDog($event) {
    $event.stopPropagation();
    console.log($event.id);
    this.dogService.deleteDog(+$event.id);
  }

  changeCheckedDog($event) {
    $event.stopPropagation();
    if ($event.isCheck) {
      // console.log($event.id);
      this.dogService.setAddChecked($event.id);
    } else {
      // console.log($event.id);
      this.dogService.setDeleteChecked($event.id);
    }
  }


}
