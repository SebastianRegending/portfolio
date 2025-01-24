import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';
  private isBrowser: boolean;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.translate.addLangs(['de', 'en']);

    const savedLanguage = this.isBrowser
      ? localStorage.getItem(this.LANGUAGE_KEY)
      : null;

    if (savedLanguage && ['de', 'en'].includes(savedLanguage)) {
      this.translate.setDefaultLang(savedLanguage);
      this.translate.use(savedLanguage);
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      if (this.isBrowser) {
        localStorage.setItem(this.LANGUAGE_KEY, 'en');
      }
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    if (this.isBrowser) {
      localStorage.setItem(this.LANGUAGE_KEY, language);
    }
  }

  getCurrentLanguage(): string {
    if (this.isBrowser) {
      return localStorage.getItem(this.LANGUAGE_KEY) || 'en';
    }
    return 'en';
  }
}
