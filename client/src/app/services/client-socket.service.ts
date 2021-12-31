import { Injectable } from '@angular/core';
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

  suggestedSongsObservable: Subject<SongInformation[]> = new Subject<SongInformation[]>();
  notFoundSuggestedSongsObservable: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.socket = io(environment.url, {
      transports: ['websocket'],
      upgrade: false,
    });

    this.initializeListeners();
  }

  initializeListeners(): void {

    this.socket.on('foundSongsSuggestions', (songsInformation: SongInformation[]) => {
      this.suggestedSongsObservable.next(songsInformation);
    });

    this.socket.on('songSuggestionsNotFound', () => {
      this.notFoundSuggestedSongsObservable.next(false);
    });

    this.socket.on('foundLyrics', (songInformation: SongInformation) => {
      this.lyricsObservable.next(songInformation);
    });

    this.socket.on('lyricsNotFound', () => {
      this.notFoundLyricsObservable.next(false);
    });
  }

  getSongsSuggestions(songInformation: string): void {
    this.socket.emit('getSongsSuggestions', songInformation);
  }

  getLyricsFromServer(songInformation: string): void {
    this.socket.emit('getLyrics', songInformation);
  }
}
