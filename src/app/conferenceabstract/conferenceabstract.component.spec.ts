import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceabstractComponent } from './conferenceabstract.component';

describe('ConferenceabstractComponent', () => {
  let component: ConferenceabstractComponent;
  let fixture: ComponentFixture<ConferenceabstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceabstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceabstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
