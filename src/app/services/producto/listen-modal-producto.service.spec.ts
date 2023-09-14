import { TestBed } from '@angular/core/testing';

import { ListenModalProductoService } from './listen-modal-producto.service';

describe('ListenModalProductoService', () => {
  let service: ListenModalProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListenModalProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
