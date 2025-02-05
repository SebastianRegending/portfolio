import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { ScrollStateService } from '../shared/services/scroll-state.service';
import { LanguageService } from '../shared/services/language.service';
import { sharedImports } from '../../app/shared/imports';

@Component({
    selector: 'app-legal-notice',
    imports: [sharedImports],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  constructor(
    private viewportScroller: ViewportScroller,
    private scrollStateService: ScrollStateService,
    private router: Router,
    private location: Location,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.scrollStateService.previousScrollPosition$.subscribe((position) =>
      this.viewportScroller.scrollToPosition([0, position])
    );
  }

  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

  goBack(): void {
    this.router
      .navigate(['/'], {
        state: { scrollToFooter: true },
      })
      .then(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
  }
}
