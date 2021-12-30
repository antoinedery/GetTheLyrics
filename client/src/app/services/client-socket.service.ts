import { ApplicationRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
// import { environment } from 'src/environments/environment.prod'; // Pour AWS
import { environment } from 'src/environments/environment'; // Pour localhost:3000
import { SongInformation } from '../classes/interfaces/song-information';

@Injectable({
  providedIn: 'root',
})
export class ClientSocketService {
  socket: Socket;
  id: string = '';
  lyricsObservable: Subject<SongInformation> = new Subject<SongInformation>();
  notFoundLyricsObservable: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.socket = io(environment.url, {
      transports: ['websocket'],
      upgrade: false,
    });

    this.initializeListeners();
  }

  initializeListeners(): void {
    this.socket.on('foundLyrics', (songInformation: SongInformation) => {
      this.lyricsObservable.next(songInformation);
    });

    this.socket.on('notFound', () => {
      this.notFoundLyricsObservable.next(false);
    });
  }

  getLyricsFromServer(songInformation: string): void {
    this.socket.emit('getLyrics', songInformation);
  }
}
