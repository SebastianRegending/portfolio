import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

  hideJoinScreenshot: boolean = true;
  hideSharkieScreenshot: boolean = true;

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
}

