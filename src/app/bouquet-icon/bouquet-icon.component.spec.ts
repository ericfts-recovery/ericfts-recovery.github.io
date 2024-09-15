import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetIconComponent } from './bouquet-icon.component';

describe('BouquetIconComponent', () => {
  let component: BouquetIconComponent;
  let fixture: ComponentFixture<BouquetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouquetIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouquetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
