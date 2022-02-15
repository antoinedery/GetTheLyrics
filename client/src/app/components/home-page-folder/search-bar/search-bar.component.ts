import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SongInformation } from '@app/classes/interfaces/song-information';
import { ClientSocketService } from '@app/services/client-socket.service';
import { LyricsHandlerService } from 'src/app/services/lyrics-handler.service';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class HomeSearchBarComponent implements OnInit, AfterViewInit {
  @ViewChild('inputBox') inputBox!: ElementRef;
  researchString: string = '';
  suggestedSongs: SongInformation[] = [];
  isSuggestionFound: boolean = false;
  constructor(
    private router: Router,
    private lyricsHandlerService: LyricsHandlerService,
    private clientSocketService: ClientSocketService
  ) {}

  ngOnInit(): void {
    this.clientSocketService.suggestedSongsObservable.subscribe((value) => {
      this.lyricsHandlerService.isReceived = true;
      this.isSuggestionFound = true;
      this.cleanSuggestions(value);
    });

    this.clientSocketService.notFoundSuggestedSongsObservable.subscribe(() => {
      this.lyricsHandlerService.isReceived = true;
      this.isSuggestionFound = false;
    });
  }

  ngAfterViewInit(): void {
    this.inputBox.nativeElement.focus();
  }

  getSuggestedSongs(): void {
    this.clientSocketService.getSongsSuggestions(this.researchString);
  }

  cleanSuggestions(suggestionsSongs:SongInformation[]):void{
    const temp:SongInformation[] = [];
    for (const song of suggestionsSongs) {
      if(song.artist.toUpperCase().includes(this.researchString.toUpperCase()) || song.songTitle.toUpperCase().includes(this.researchString.toUpperCase()))
        temp.push(song);
    }
    this.suggestedSongs = temp;
  }

  generateLyrics(): void {
    if (this.inputBox.nativeElement.value.length === 0) return;
    this.lyricsHandlerService.researchTitle = this.researchString;
    this.lyricsHandlerService.getLyrics(this.researchString);
    this.lyricsHandlerService.isReceived = false;
    this.router.navigate(['/search', this.researchString]);
  }

  selectSong(clickedSong:SongInformation):void{
    this.researchString = clickedSong.artist + ' ' + clickedSong.songTitle;
    // this.lyricsHandlerService.researchTitle = this.researchString;
    this.generateLyrics();
  }
}
