import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationunderreviewComponent } from './publicationunderreview.component';

describe('PublicationunderreviewComponent', () => {
  let component: PublicationunderreviewComponent;
  let fixture: ComponentFixture<PublicationunderreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationunderreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationunderreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
