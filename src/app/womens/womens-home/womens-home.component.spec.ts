import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensHomeComponent } from './womens-home.component';

describe('WomensHomeComponent', () => {
  let component: WomensHomeComponent;
  let fixture: ComponentFixture<WomensHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
