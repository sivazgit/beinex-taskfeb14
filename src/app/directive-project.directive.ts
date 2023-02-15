import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveProject]'
})
export class DirectiveProjectDirective implements OnInit {

  @Input() newInput:string = ''

  constructor(private elem:ElementRef) {
    console.log(elem);
    this.elem.nativeElement.style.color = 'red'
    
   }

   ngOnInit(){
    this.elem.nativeElement.classList.add('dir-class')
    this.elem.nativeElement.innerHTML = this.newInput

   }

}
