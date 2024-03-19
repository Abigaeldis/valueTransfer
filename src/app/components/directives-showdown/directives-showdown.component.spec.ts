import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesShowdownComponent } from './directives-showdown.component';

describe('DirectivesShowdownComponent', () => {
  let component: DirectivesShowdownComponent;
  let fixture: ComponentFixture<DirectivesShowdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesShowdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesShowdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
