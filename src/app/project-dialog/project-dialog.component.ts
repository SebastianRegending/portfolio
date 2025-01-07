import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent implements OnInit {

constructor() { }

ngOnInit(): void {
  console.log(this.myProjects)
}

currentIndex: number = 0;

myProjects = [
  { 
    position: '01',
    name: 'Join',
    description: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
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

nextProject() {
  this.currentIndex = (this.currentIndex + 1) % this.myProjects.length;

}
}
