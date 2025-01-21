import { Component } from '@angular/core';
import { sharedImports } from '../shared/imports';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-aboutme-section',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './aboutme-section.component.html',
  styleUrl: './aboutme-section.component.scss',
})
export class AboutmeSectionComponent {
  constructor(private languageService: LanguageService) {}
  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }
}
