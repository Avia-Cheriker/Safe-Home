import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacter2PageComponent } from './create-character2-page.component';

describe('CreateCharacter2PageComponent', () => {
  let component: CreateCharacter2PageComponent;
  let fixture: ComponentFixture<CreateCharacter2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacter2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacter2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
