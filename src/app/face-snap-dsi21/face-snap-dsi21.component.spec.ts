import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapDSI21Component } from './face-snap-dsi21.component';

describe('FaceSnapDSI21Component', () => {
  let component: FaceSnapDSI21Component;
  let fixture: ComponentFixture<FaceSnapDSI21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapDSI21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaceSnapDSI21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
