import { Component } from '@angular/core';
import { sharedImports } from '../../app/shared/imports';
import { LanguageService } from '../shared/language.service';
import { title } from 'node:process';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent {
  constructor(private languageService: LanguageService) {}
  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

  mySkills = [
    {
      image: '../../assets/img/html.png',
      title: 'HTML',
    },
    {
      image: '../../assets/img/css.png',
      title: 'CSS',
    },
    {
      image: '../../assets/img/javascript.png',
      title: 'JavaScript',
    },
    {
      image: '../../assets/img/materialdesign.png',
      title: 'Material Design',
    },
    {
      image: '../../assets/img/typescript.png',
      title: 'TypeScript',
    },
    {
      image: '../../assets/img/angular.png',
      title: 'Angular',
    },
    {
      image: '../../assets/img/firebase.png',
      title: 'Firebase',
    },
    {
      image: '../../assets/img/git.png',
      title: 'Git',
    },
    {
      image: '../../assets/img/api.png',
      title: 'REST-API',
    },
    {
      image: '../../assets/img/scrum.png',
      title: 'SCRUM',
    }
  ];
}
