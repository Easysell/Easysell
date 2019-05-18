import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlistComponent } from './brandlist.component';

describe('BrandlistComponent', () => {
  let component: BrandlistComponent;
  let fixture: ComponentFixture<BrandlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
