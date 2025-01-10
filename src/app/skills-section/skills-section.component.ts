import { Component } from '@angular/core';
import { sharedImports } from '../../app/shared/imports';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  constructor(private languageService: LanguageService) {}
  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

}
