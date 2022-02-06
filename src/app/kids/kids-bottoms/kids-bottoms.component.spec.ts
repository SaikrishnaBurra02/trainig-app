import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsBottomsComponent } from './kids-bottoms.component';

describe('KidsBottomsComponent', () => {
  let component: KidsBottomsComponent;
  let fixture: ComponentFixture<KidsBottomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsBottomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsBottomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
