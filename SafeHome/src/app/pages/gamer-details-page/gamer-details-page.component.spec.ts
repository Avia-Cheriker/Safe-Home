import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerDetailsPageComponent } from './gamer-details-page.component';

describe('GamerDetailsPageComponent', () => {
  let component: GamerDetailsPageComponent;
  let fixture: ComponentFixture<GamerDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
