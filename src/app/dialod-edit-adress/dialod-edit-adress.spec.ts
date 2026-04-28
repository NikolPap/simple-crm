import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialodEditAdress } from './dialod-edit-adress';

describe('DialodEditAdress', () => {
  let component: DialodEditAdress;
  let fixture: ComponentFixture<DialodEditAdress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialodEditAdress],
    }).compileComponents();

    fixture = TestBed.createComponent(DialodEditAdress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
