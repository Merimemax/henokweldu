import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationacceptedComponent } from './publicationaccepted.component';

describe('PublicationacceptedComponent', () => {
  let component: PublicationacceptedComponent;
  let fixture: ComponentFixture<PublicationacceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationacceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationacceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
