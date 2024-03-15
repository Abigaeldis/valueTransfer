import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivePageComponent } from './structural-directive-page.component';

describe('StructuralDirectivePageComponent', () => {
  let component: StructuralDirectivePageComponent;
  let fixture: ComponentFixture<StructuralDirectivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralDirectivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
