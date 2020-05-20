import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacter1PageComponent } from './create-character1-page.component';

describe('CreateCharacter1PageComponent', () => {
  let component: CreateCharacter1PageComponent;
  let fixture: ComponentFixture<CreateCharacter1PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacter1PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacter1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
