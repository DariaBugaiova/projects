import {Component, Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  namef:string;
  //name = 'John';
  // Howavard = 'A dog Howavard';
}

//Attribute
@Directive({
  selector:"[uppercase]"
})
export class UpperCaseDirective{
  constructor(private el:ElementRef){
    el.nativeElement.style.textTransform = "uppercase";
  }
}
//Structural

@Directive({
  selector: "[ifnot]"
})
export class IfNotDirective{
  private hasView:boolean = false;

   constructor(private tempRef:TemplateRef<any>,
               private viewContainer:ViewContainerRef){}

     @Input() set ifnot(condition:boolean){
     if(!condition && !this.hasView){
       this.viewContainer.createEmbeddedView(this.tempRef)
       this.hasView = true
     } else if(condition && this.hasView){
       this.viewContainer.clear();
       this.hasView = false;
     }
   }
}
