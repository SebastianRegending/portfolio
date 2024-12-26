import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutmeSectionComponent } from "./aboutme-section/aboutme-section.component";
import { SkillsSectionComponent } from "./skills-section/skills-section.component";
import { ProjectsSectionComponent } from "./projects-section/projects-section.component";
import { ContactmeSectionComponent } from "./contactme-section/contactme-section.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroSectionComponent, AboutmeSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, ContactmeSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
