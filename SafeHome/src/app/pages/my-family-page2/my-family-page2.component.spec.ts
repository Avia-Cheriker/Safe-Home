import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFamilyPage2Component } from './my-family-page2.component';

describe('MyFamilyPage2Component', () => {
  let component: MyFamilyPage2Component;
  let fixture: ComponentFixture<MyFamilyPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFamilyPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFamilyPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
