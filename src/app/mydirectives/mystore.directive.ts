// src/app/mydirectives/mystore.directive.ts
import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[mystore]',
  standalone: true
})
export class MystoreDirective implements OnInit {
  @Input() backgroundColor: string = 'lightgrey'; // Default to light grey if not provided

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Create a div element
    const div = this.renderer.createElement('div');

    // Apply styles to the div
    this.renderer.setStyle(div, 'display', 'inline-block');
    this.renderer.setStyle(div, 'border', '1px solid black');
    this.renderer.setStyle(div, 'padding', '10px');
    this.renderer.setStyle(div, 'background-color', this.backgroundColor);

    // Preserve existing styles from host element
    const hostStyles = this.el.nativeElement.getAttribute('style');
    if (hostStyles) {
      const styleArray = hostStyles.split(';').filter(Boolean);
      styleArray.forEach((style: { split: (arg0: string) => { (): any; new(): any; map: { (arg0: (s: any) => any): [any, any]; new(): any; }; }; }) => {
        const [property, value] = style.split(':').map(s => s.trim());
        this.renderer.setStyle(div, property, value);
      });
    }

    // Move the element's children into the div
    while (this.el.nativeElement.firstChild) {
      this.renderer.appendChild(div, this.el.nativeElement.firstChild);
    }

    // Append the div to the element
    this.renderer.appendChild(this.el.nativeElement, div);
  }
}
