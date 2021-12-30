import { Component, OnInit } from '@angular/core';
import { LyricsHandlerService } from 'src/app/services/lyrics-handler.service';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './home-search-bar.component.html',
  styleUrls: ['./home-search-bar.component.css'],
})
export class HomeSearchBarComponent {
  songTitle: string = '';
  constructor(private lyricsHandlerService: LyricsHandlerService) {}

  generateLyrics(): void {
    this.lyricsHandlerService.getLyrics(this.songTitle);
  }
}
