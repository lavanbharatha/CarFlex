import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyDetailsComponent } from './buy-details.component';

describe('BuyDetailsComponent', () => {
  let component: BuyDetailsComponent;
  let fixture: ComponentFixture<BuyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
