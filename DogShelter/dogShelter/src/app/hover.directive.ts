import {Input, Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('class.transform-card') isTransform = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.isTransform = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isTransform = false;
  }
}
