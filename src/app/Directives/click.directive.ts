import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  constructor(private elem: ElementRef) { }
  @HostListener("click") onClicks() {
    this.text("#fd7e14")
  }
 private text(action: string) {
    this.elem.nativeElement.style.color = action;
  }


}
//#fd7e14