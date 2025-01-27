import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { sharedImports } from '../imports';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [sharedImports, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private languageService: LanguageService) {}
  currentLang: string = 'de';
  isButtonChecked: boolean = false;
  isAnimating = false;
  isActive = false;
  isMenuOpened = false;

  ngOnInit() {
    this.currentLang = this.languageService.getCurrentLanguage();
    this.isButtonChecked = this.currentLang === 'de';
  }

  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
    this.isAnimating = true;

    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

  toggleMenu(event: any) {
    this.isMenuOpened = !this.isMenuOpened;
    this.toggleClass();
  }

  toggleLanguage() {
    const newLanguage = this.currentLang === 'en' ? 'de' : 'en';
    this.languageService.useLanguage(newLanguage);
    this.currentLang = newLanguage;
    this.isButtonChecked = newLanguage === 'de';
  }

  closeMenu() {
    this.isActive = false;
    this.isMenuOpened = false;
  }
}
