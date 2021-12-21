import { Component, OnInit } from '@angular/core';
import { ClientSocketService } from 'src/app/services/client-socket.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  lyrics: string = '';
  constructor(private clientSocketService: ClientSocketService) {}

  ngOnInit(): void {
    this.clientSocketService.lyricsObservable.subscribe((value) => {
      console.log('ici');
      this.lyrics = value;
    });
  }
}
