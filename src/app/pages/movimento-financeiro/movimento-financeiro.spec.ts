import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoFinanceiro } from './movimento-financeiro';

describe('MovimentoFinanceiro', () => {
  let component: MovimentoFinanceiro;
  let fixture: ComponentFixture<MovimentoFinanceiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentoFinanceiro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentoFinanceiro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
