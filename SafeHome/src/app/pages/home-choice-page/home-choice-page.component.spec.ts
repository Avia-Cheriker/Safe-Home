import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChoicePageComponent } from './home-choice-page.component';

describe('HomeChoicePageComponent', () => {
  let component: HomeChoicePageComponent;
  let fixture: ComponentFixture<HomeChoicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChoicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
