import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryClinicalComponent } from './diary-clinical.component';

describe('DiaryClinicalComponent', () => {
  let component: DiaryClinicalComponent;
  let fixture: ComponentFixture<DiaryClinicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryClinicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryClinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
