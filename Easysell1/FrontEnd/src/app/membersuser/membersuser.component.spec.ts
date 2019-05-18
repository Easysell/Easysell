import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersuserComponent } from './membersuser.component';

describe('MembersuserComponent', () => {
  let component: MembersuserComponent;
  let fixture: ComponentFixture<MembersuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
