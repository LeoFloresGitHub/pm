import { TestBed } from '@angular/core/testing';

import { ListenModalCategoriaService } from './listen-modal-categoria.service';

describe('ListenModalCategoriaService', () => {
  let service: ListenModalCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListenModalCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
