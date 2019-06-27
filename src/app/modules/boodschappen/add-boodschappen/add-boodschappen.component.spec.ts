import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoodschappenComponent } from './add-boodschappen.component';

describe('AddBoodschappenComponent', () => {
  let component: AddBoodschappenComponent;
  let fixture: ComponentFixture<AddBoodschappenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoodschappenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoodschappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
