import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarHomeComponent } from './car-home.component';

describe('CarHomeComponent', () => {
  let component: CarHomeComponent;
  let fixture: ComponentFixture<CarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
