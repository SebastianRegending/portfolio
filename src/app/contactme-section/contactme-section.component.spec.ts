import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmeSectionComponent } from './contactme-section.component';

describe('ContactmeSectionComponent', () => {
  let component: ContactmeSectionComponent;
  let fixture: ComponentFixture<ContactmeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactmeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactmeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
