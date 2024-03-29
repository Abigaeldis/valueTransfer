import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModuleComponent } from './demo-module.component';

describe('DemoModuleComponent', () => {
  let component: DemoModuleComponent;
  let fixture: ComponentFixture<DemoModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
