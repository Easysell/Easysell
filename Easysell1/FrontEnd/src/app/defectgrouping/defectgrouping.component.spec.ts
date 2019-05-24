import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectgroupingComponent } from './defectgrouping.component';

describe('DefectgroupingComponent', () => {
  let component: DefectgroupingComponent;
  let fixture: ComponentFixture<DefectgroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectgroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectgroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
