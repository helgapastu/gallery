import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhotoStyle]'
})
export class PhotoStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'border-style', 'solid')
    this.renderer.setStyle(this.el.nativeElement, 'border-color', 'lightgrey')
    this.renderer.setStyle(this.el.nativeElement, 'border-width', '3px')
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer')
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'border-style', null)
    this.renderer.setStyle(this.el.nativeElement, 'border-color', null)
    this.renderer.setStyle(this.el.nativeElement, 'border-width', null)
  }

}
