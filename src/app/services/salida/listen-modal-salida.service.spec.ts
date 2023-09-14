import { TestBed } from '@angular/core/testing';

import { ListenModalSalidaService } from './listen-modal-salida.service';

describe('ListenModalSalidaService', () => {
  let service: ListenModalSalidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListenModalSalidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
