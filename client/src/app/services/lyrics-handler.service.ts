declare var require: any;
import { Injectable } from '@angular/core';
import { ClientSocketService } from './client-socket.service';

@Injectable({
  providedIn: 'root',
})
export class LyricsHandlerService {
  isInitialize: boolean = false;
  researchTitle: string = '';
  constructor(private clientSocketService: ClientSocketService) {}

  getLyrics(songInformation: string) {
    this.isInitialize = true;
    this.clientSocketService.getLyricsFromServer(songInformation);
  }
}
