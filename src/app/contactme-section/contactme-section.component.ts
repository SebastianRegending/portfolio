import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { sharedImports } from '../shared/imports';
import { LanguageService } from '../shared/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactme-section',
  standalone: true,
  imports: [FormsModule, CommonModule, sharedImports, RouterLink],
  templateUrl: './contactme-section.component.html',
  styleUrl: './contactme-section.component.scss',
})
export class ContactmeSectionComponent {
  constructor(private languageService: LanguageService) {}
  useLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

  @ViewChild('contactForm') contactForm!: NgForm;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    acceptPrivacyPolicy: false,
  };

  showPrivacyPolicyNotice = false;

  post = {
    endPoint: 'https://sebastian-regending.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
    }
  }

  isFormValid(): boolean {
    return (
      (this.contactForm?.valid ?? false) && this.contactData.acceptPrivacyPolicy
    );
  }

  onPrivacyPolicyChange(checked: boolean) {
    this.showPrivacyPolicyNotice = !checked;
  }
}
