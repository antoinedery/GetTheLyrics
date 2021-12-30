import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LyricsHandlerService } from 'src/app/services/lyrics-handler.service';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class HomeSearchBarComponent implements AfterViewInit {
  @ViewChild('inputBox') inputBox!: ElementRef;
  songTitle: string = '';
  constructor(private lyricsHandlerService: LyricsHandlerService) {}

  ngAfterViewInit(): void {
    this.inputBox.nativeElement.focus();
  }

  generateLyrics(): void {
    this.lyricsHandlerService.getLyrics(this.songTitle);
  }
}
