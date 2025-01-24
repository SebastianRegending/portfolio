import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { ScrollStateService } from '../shared/services/scroll-state.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent implements OnInit {
  constructor(
    private viewportScroller: ViewportScroller, 
    private scrollStateService: ScrollStateService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.scrollStateService.previousScrollPosition$.subscribe(
      position => this.viewportScroller.scrollToPosition([0, position])
    );
  }

  goBack(): void {
    this.router.navigate(['/'], { 
      state: { scrollToFooter: true }
    }).then(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
}