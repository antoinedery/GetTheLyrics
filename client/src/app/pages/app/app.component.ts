import { Component } from '@angular/core';
import { ClientSocketService } from 'src/app/services/client-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(clientSocketService: ClientSocketService) {}
}
