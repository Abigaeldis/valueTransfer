import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigidexComponent } from './digidex.component';

describe('DigidexComponent', () => {
  let component: DigidexComponent;
  let fixture: ComponentFixture<DigidexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigidexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigidexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
