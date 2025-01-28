import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { sharedImports } from '../shared/imports';
import { LanguageService } from '../shared/services/language.service';
import { ScrollStateService } from '../shared/services/scroll-state.service';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactme-section',
  standalone: true,
  imports: [FormsModule, CommonModule, sharedImports, RouterLink],
  templateUrl: './contactme-section.component.html',
  styleUrl: './contactme-section.component.scss',
})
export class ContactmeSectionComponent {
  constructor(
    private languageService: LanguageService,
    private scrollStateService: ScrollStateService,
    private viewportScroller: ViewportScroller,
    private el: ElementRef
  ) {}
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
  showSubmitDialog = false;
  showEmailError = false;
  showMessageError = false;

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
            this.showSubmitDialog = true;
            ngForm.resetForm();
            this.contactData.acceptPrivacyPolicy = false;
            this.showPrivacyPolicyNotice = false;
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }

  closeDialog() {
    this.showSubmitDialog = false;
  }

  isFormValid(): boolean {
    return (
      (this.contactForm?.valid ?? false) && this.contactData.acceptPrivacyPolicy
    );
  }

  onEmailBlur(email: NgModel): void {
    this.showEmailError = email.invalid && email.value;
  }

  onMessageBlur(message: NgModel): void {
    this.showMessageError = message.invalid && message.value;
  }

  onPrivacyPolicyChange(checked: boolean) {
    this.showPrivacyPolicyNotice = !checked;
  }

  onPrivacyPolicyClick(): void {
    const footerPosition =
      this.el.nativeElement.getBoundingClientRect().bottom + window.scrollY;
    this.scrollStateService.setPreviousScrollPosition(footerPosition);
  }
}
