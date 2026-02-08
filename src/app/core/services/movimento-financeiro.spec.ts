import { TestBed } from '@angular/core/testing';

import { MovimentoFinanceiro } from './movimento-financeiro';

describe('MovimentoFinanceiro', () => {
  let service: MovimentoFinanceiro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentoFinanceiro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
