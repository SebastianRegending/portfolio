import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme-section',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactme-section.component.html',
  styleUrl: './contactme-section.component.scss'
})
export class ContactmeSectionComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  http = inject(HttpClient);

contactData = {
  name: '',
  email: '',
  message: '',
  acceptPrivacyPolicy: false,
}

mailTest = true;
showPrivacyPolicyNotice = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  isFormValid(): boolean {
    return (this.contactForm?.valid ?? false) && this.contactData.acceptPrivacyPolicy;
  }

  onPrivacyPolicyChange(checked: boolean) {
    this.showPrivacyPolicyNotice = !checked;
  }

}
