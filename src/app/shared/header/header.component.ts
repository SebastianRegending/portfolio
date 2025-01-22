import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
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
  isGerman = false;
  isAnimating = false;
  isActive = false;
  isMenuOpened = false;
  currentLanguageIcon = '../../assets/img/de-active.png';

  ngOnInit() {
    const currentLang = this.languageService.getCurrentLanguage();
    this.isGerman = currentLang === 'de';
    this.currentLanguageIcon = this.isGerman
      ? '../assets/img/de-active.png'
      : '../assets/img/en-active.png';
  }

  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
    this.isAnimating = true;

    setTimeout(() => {
      this.isGerman = !this.isGerman;
      this.currentLanguageIcon = this.isGerman
        ? '../assets/img/de-active.png'
        : '../assets/img/en-active.png';
    }, 200);

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

  toggleLanguage(): void {
    const newLanguage = this.isGerman ? 'en' : 'de';
    this.useLanguage(newLanguage);
  }
}
