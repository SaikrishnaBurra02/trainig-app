import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsTopsComponent } from './kids-tops.component';

describe('KidsTopsComponent', () => {
  let component: KidsTopsComponent;
  let fixture: ComponentFixture<KidsTopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsTopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
