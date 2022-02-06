import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensTopsComponent } from './womens-tops.component';

describe('WomensTopsComponent', () => {
  let component: WomensTopsComponent;
  let fixture: ComponentFixture<WomensTopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensTopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
