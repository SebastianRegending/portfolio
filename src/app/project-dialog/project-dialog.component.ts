import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { sharedImports } from '../shared/imports';
import { LanguageService } from '../shared/services/language.service';

@Component({
    selector: 'app-project-dialog',
    imports: [CommonModule, sharedImports],
    templateUrl: './project-dialog.component.html',
    styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent implements OnInit {
  constructor(private languageService: LanguageService) {}
  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

  ngOnInit(): void {}
  @Input() myProjects: any[] = [];
  @Input() currentIndex: number = 0;
  @Input() project: string | null = null;
  @Output() closeDialog = new EventEmitter<void>();

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.myProjects.length;
  }

  close() {
    this.closeDialog.emit();
  }
}
