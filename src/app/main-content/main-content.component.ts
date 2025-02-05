import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutmeSectionComponent } from '../aboutme-section/aboutme-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { ContactmeSectionComponent } from '../contactme-section/contactme-section.component';

@Component({
    selector: 'app-main-content',
    imports: [
        HeroSectionComponent,
        AboutmeSectionComponent,
        SkillsSectionComponent,
        ProjectsSectionComponent,
        ContactmeSectionComponent,
    ],
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss'
})
export class MainContentComponent {}
