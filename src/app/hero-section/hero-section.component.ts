import { Component } from '@angular/core';
import { sharedImports } from '../../app/shared/imports';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  constructor(private languageService: LanguageService) {}
  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

}
