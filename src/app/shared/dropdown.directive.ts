// import { Directive, HostListener, HostBinding } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
// }

// This code is for if you want that a dropdown can also be closed by a click anywhere outside
// (which also means that a click on one dropdown closes any other one, btw.), replace the code by this one
// (placing the listener not on the dropdown, but on the document):

import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
