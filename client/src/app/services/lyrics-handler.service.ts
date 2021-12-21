declare var require: any;
import { Injectable } from '@angular/core';
import { ClientSocketService } from './client-socket.service';

@Injectable({
  providedIn: 'root',
})
export class LyricsHandlerService {
  constructor(private clientSocketService: ClientSocketService) {}

  getLyrics(songInformation: string) {
    this.clientSocketService.getLyricsFromServer(songInformation);
  }
}
