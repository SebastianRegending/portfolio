import { Component } from '@angular/core';
import { sharedImports } from '../shared/imports';
import { LanguageService } from '../shared/services/language.service';

@Component({
    selector: 'app-aboutme-section',
    imports: [sharedImports],
    templateUrl: './aboutme-section.component.html',
    styleUrl: './aboutme-section.component.scss'
})
export class AboutmeSectionComponent {
  constructor(private languageService: LanguageService) {}
  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

  isVisible: boolean = false;
  hideSlantedLines: boolean = true;

  showSlantedLinesBehindProfile() {
    this.hideSlantedLines = false;
  }

  hideSlantedLinesBehindProfile() {
    this.hideSlantedLines = true;
  }



}
