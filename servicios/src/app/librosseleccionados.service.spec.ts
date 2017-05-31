import { TestBed, inject } from '@angular/core/testing';

import { LibrosseleccionadosService } from './librosseleccionados.service';

describe('LibrosseleccionadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrosseleccionadosService]
    });
  });

  it('should be created', inject([LibrosseleccionadosService], (service: LibrosseleccionadosService) => {
    expect(service).toBeTruthy();
  }));
});
