import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  goBack(): void {
    this.router
      .navigate(['/'], {
        state: { scrollToFooter: true },
      })
      .then(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
  }
}
