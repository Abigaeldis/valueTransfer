import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  // si on appelait l'input de la meme maniere que la directive
  // alors on aurait pas a faire [color]="'red'" mais juste
  // [appHighlight]="'red'"
  @Input()
  public color: string = 'yellow';

  /**
   * HostBinding permet de s'abonner à un évenement JS qui a lieu sur
   * l'élément portant la directive
   */
  @HostListener('click')
  private onClicked(): void {
    console.log('highlight clicked');
  }

  /**
   *
   * @param elementRef  paramètre injecté par Angular. Contient l'élément portant la directive
   */

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLElement).style.backgroundColor =
      this.color;
  }
}
