import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCharacterPageComponent } from './build-character-page.component';

describe('BuildCharacterPageComponent', () => {
  let component: BuildCharacterPageComponent;
  let fixture: ComponentFixture<BuildCharacterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildCharacterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCharacterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
