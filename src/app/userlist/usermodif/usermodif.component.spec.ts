import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermodifComponent } from './usermodif.component';

describe('UsermodifComponent', () => {
  let component: UsermodifComponent;
  let fixture: ComponentFixture<UsermodifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermodifComponent]
    });
    fixture = TestBed.createComponent(UsermodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
