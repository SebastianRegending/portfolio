import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterModule,
        HeaderComponent,
        FooterComponent,
        TranslateModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService, private router: Router) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngAfterViewInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['scrollToFooter']) {
      const footer = document.querySelector('footer');
      footer?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
