import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectDialogComponent, CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

  hideJoinScreenshot: boolean = true;
  hideSharkieScreenshot: boolean = true;
  isVisible: boolean = false;
  currentIndex: number = 0;

  showProjectScreenshotJoin() {
    this.hideJoinScreenshot = false;
  }

  hideProjectScreenshotJoin() {
    this.hideJoinScreenshot = true;
  }

  showProjectScreenshotSharkie() {
    this.hideSharkieScreenshot = false;
  }

  hideProjectScreenshotSharkie() {
    this.hideSharkieScreenshot = true;
  }

  selectedProject: string | null = null;

  openProjectDialog(index: number) {
    this.currentIndex = index;
    if (this.currentIndex === 0) {
      this.selectedProject = 'Join';
    } else if (this.currentIndex === 1) {
      this.selectedProject = 'Sharkie';      
    }
    this.isVisible = true;
    document.body.style.overflow = 'hidden';
  }
  
  closeProjectDialog() {
    this.isVisible = false;
    document.body.style.overflow = 'auto';
  }

  myProjects = [
    { 
      position: '01',
      name: 'Join',
      description: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      screenshot: '../../assets/img/join-big.png',
      skills: [
        {
        image: '../../assets/img/htmlsmall-green.png',
        text: 'HTML'
      },
      {
        image: '../../assets/img/csssmall-green.png',
        text: 'CSS'
      },
      {
        image: '../../assets/img/javascriptsmall-green.png',
        text: 'JavaScript'
      },
      {
        image: '../../assets/img/firebasesmall-green.png',
        text: 'Firebase'
      }
      ],
      links: [
        {
          github: 'https://github.com/SebastianRegending/join.git',
          livetest: 'test'
        },
      ]
  
  },
  
  { 
    position: '02',
    name: 'Sharkie',
    description: 'Schwimm- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den riesigen Orca zu kämpfen.',
    screenshot: '../../assets/img/sharkie.png',
    skills: [
      {
      image: '../../assets/img/htmlsmall-green.png',
      text: 'HTML'
    },
    {
      image: '../../assets/img/csssmall-green.png',
      text: 'CSS'
    },
    {
      image: '../../assets/img/javascriptsmall-green.png',
      text: 'JavaScript'
    },
    {
      image: '',
      text: 'OOP'
    },
    ],
    links: [
      {
        github: 'https://github.com/SebastianRegending/sharkie.git',
        livetest: 'test'
      },
    ]
  }
  ];
}

