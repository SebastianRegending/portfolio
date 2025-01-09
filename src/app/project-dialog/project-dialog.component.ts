import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

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
}
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
