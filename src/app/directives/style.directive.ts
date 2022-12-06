import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.margin = '0px 0px 0px 10px'
  
   }

}
