import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent {
  @Input() name: string;
  @Input() color: string;

  @Output() bark = new EventEmitter<{}>();
  @Output() nameChange = new EventEmitter<string>();
  @Output() colorChange = new EventEmitter<string>();

  colorStyles = {
    color: this.goGreen(),
    fontSize: "1.5em"
  }
  goGreen(){
    return "green"
  }
  handleClick() {
    this.bark.emit({});
  }


  handleColorChange(e){
    this.colorChange.emit(e.target.value);
  }
  handleNameChange(e) {
    // console.log(e.target.value);
    this.nameChange.emit(e.target.value);
  }
}
