import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImacComponent } from './imac.component';

describe('ImacComponent', () => {
  let component: ImacComponent;
  let fixture: ComponentFixture<ImacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
