import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoodschappenItemComponent } from './boodschappen-item.component';

describe('BoodschappenItemComponent', () => {
  let component: BoodschappenItemComponent;
  let fixture: ComponentFixture<BoodschappenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoodschappenItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoodschappenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
