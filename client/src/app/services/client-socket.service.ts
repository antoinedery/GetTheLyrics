import { ApplicationRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
// import { environment } from 'src/environments/environment.prod'; // Pour AWS
import { environment } from 'src/environments/environment'; // Pour localhost:3000

@Injectable({
  providedIn: 'root',
})
export class ClientSocketService {
  socket: Socket;
  id: string = '';
  lyricsObservable: Subject<string> = new Subject<string>();

  constructor() {
    this.socket = io(environment.url, {
      transports: ['websocket'],
      upgrade: false,
    });

    this.initializeListeners();
  }

  initializeListeners(): void {
    this.socket.on('foundLyrics', (lyrics: string) => {
      this.lyricsObservable.next(lyrics);
    });

    this.socket.on('notFound', () => {
      this.lyricsObservable.next('Aucune pièce trouvée');
    });
  }

  getLyricsFromServer(songInformation: string): void {
    this.socket.emit('getLyrics', songInformation);
  }
}
