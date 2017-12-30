import { TestBed, inject } from '@angular/core/testing';

import { NoopInterceptorService } from './noop-interceptor.service';

describe('NoopInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoopInterceptorService]
    });
  });

  it('should be created', inject([NoopInterceptorService], (service: NoopInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
