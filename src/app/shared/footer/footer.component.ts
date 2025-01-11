import { Component } from '@angular/core';
import { sharedImports } from '../imports';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
constructor(private languageService: LanguageService) {}
  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

}
