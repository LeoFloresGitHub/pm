import { TestBed } from '@angular/core/testing';
import { ListenModalService } from './listen-modal.service';

describe('ListenModalService', () => {
  let service: ListenModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListenModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
