import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUser } from './dialog-add-user';

describe('DialogAddUser', () => {
  let component: DialogAddUser;
  let fixture: ComponentFixture<DialogAddUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddUser],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogAddUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
