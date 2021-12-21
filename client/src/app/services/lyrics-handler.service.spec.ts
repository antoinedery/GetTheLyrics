import { TestBed } from '@angular/core/testing';

import { LyricsHandlerService } from './lyrics-handler.service';

describe('LyricsHandlerService', () => {
  let service: LyricsHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LyricsHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
