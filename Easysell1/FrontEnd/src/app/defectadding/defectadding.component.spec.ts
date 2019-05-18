import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectaddingComponent } from './defectadding.component';

describe('DefectaddingComponent', () => {
  let component: DefectaddingComponent;
  let fixture: ComponentFixture<DefectaddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectaddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
