import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleadingFaceComponent } from './pleading-face.component';

describe('PleadingFaceComponent', () => {
  let component: PleadingFaceComponent;
  let fixture: ComponentFixture<PleadingFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PleadingFaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleadingFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
