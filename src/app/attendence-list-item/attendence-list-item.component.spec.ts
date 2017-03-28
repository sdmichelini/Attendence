import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceListItemComponent } from './attendence-list-item.component';

describe('AttendenceListItemComponent', () => {
  let component: AttendenceListItemComponent;
  let fixture: ComponentFixture<AttendenceListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendenceListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendenceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
