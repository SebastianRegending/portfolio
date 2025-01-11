import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
import { sharedImports } from '../imports';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [sharedImports, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}
  isGerman = true;
  isAnimating = false;
  currentLanguageIcon = '../../assets/img/en-active.png';

  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
    this.isAnimating = true;

    setTimeout(() => {
      this.isGerman = !this.isGerman;
      this.currentLanguageIcon = this.isGerman
        ? '../assets/img/en-active.png'
        : '../assets/img/de-active.png';
    }, 200);

    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
  }

}

