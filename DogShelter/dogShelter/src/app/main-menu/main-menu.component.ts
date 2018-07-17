import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  vis_content = false;
  constructor() { }

  ngOnInit() {
  }

  showContent() {
    console.log('show');
  this.vis_content = !this.vis_content;
  }

}
