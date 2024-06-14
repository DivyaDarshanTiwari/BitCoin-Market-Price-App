import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitCoinPageComponent } from './bit-coin-page.component';

describe('BitCoinPageComponent', () => {
  let component: BitCoinPageComponent;
  let fixture: ComponentFixture<BitCoinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BitCoinPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitCoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
