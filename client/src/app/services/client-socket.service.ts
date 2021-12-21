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

  constructor() {
    this.socket = io(environment.url, {
      transports: ['websocket'],
      upgrade: false,
    });
    console.log(this.socket);
  }
}
