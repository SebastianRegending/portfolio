import { Component, ElementRef } from '@angular/core';
import { sharedImports } from '../imports';
import { LanguageService } from '../services/language.service';
import { ScrollStateService } from '../services/scroll-state.service';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [sharedImports],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(
    private languageService: LanguageService,
    private scrollStateService: ScrollStateService,
    private viewportScroller: ViewportScroller,
    private el: ElementRef
  ) {}

  onLegalNoticeClick(): void {
    const footerPosition =
      this.el.nativeElement.getBoundingClientRect().bottom + window.scrollY;
    this.scrollStateService.setPreviousScrollPosition(footerPosition);
  }

  scrollToHeader(): void {
    this.viewportScroller.scrollToAnchor('header');
  }
}
