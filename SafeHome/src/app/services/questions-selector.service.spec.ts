import { TestBed } from '@angular/core/testing';

import { QuestionsSelectorService } from './questions-selector.service';

describe('QuestionsSelectorService', () => {
  let service: QuestionsSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
