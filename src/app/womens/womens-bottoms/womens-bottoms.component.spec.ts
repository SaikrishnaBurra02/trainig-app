import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensBottomsComponent } from './womens-bottoms.component';

describe('WomensBottomsComponent', () => {
  let component: WomensBottomsComponent;
  let fixture: ComponentFixture<WomensBottomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensBottomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensBottomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
