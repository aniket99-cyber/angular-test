import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[optimizedImage]',
  standalone: true
})
export class OptimizedImageDirective implements OnInit {
  @Input() src: string = '';
  @Input() placeholder: string = '../../assets/images/placeholder-image.jpg';
  @Input() fallback: string = '../../assets/images/placeholder-image.jpg';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const imgElement = this.el.nativeElement as HTMLImageElement;
    this.renderer.setAttribute(imgElement, 'src', this.placeholder);
    const preloader = new Image();
    preloader.src = this.src;

    preloader.onload = () => {
      this.renderer.setAttribute(imgElement, 'src', this.src);
    };

    preloader.onerror = () => {
      this.renderer.setAttribute(imgElement, 'src', this.fallback);
    };
  }
}
