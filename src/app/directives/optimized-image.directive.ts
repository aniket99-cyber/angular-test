import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[optimizedImage]'
})
export class OptimizedImageDirective implements OnInit {
  @Input() src: string ='';
  @Input() placeholder: string = '../../assets/images/placeholder-image.jpg';
  @Input() fallback: string = '../../assets/images/placeholder-image.jpg';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const imgElement = this.el.nativeElement as HTMLImageElement;
    imgElement.src = this.placeholder;
    imgElement.onload = () => imgElement.src = this.src;
    imgElement.onerror = () => imgElement.src = this.fallback;
  }
}
