import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';
import { sharedImports } from '../../app/shared/imports';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
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
