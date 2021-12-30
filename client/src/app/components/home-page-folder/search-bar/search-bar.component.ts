import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LyricsHandlerService } from 'src/app/services/lyrics-handler.service';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class HomeSearchBarComponent implements AfterViewInit {
  @ViewChild('inputBox') inputBox!: ElementRef;
  songTitle: string = '';
  constructor(
    private router: Router,
    private lyricsHandlerService: LyricsHandlerService
  ) {}

  ngAfterViewInit(): void {
    this.inputBox.nativeElement.focus();
  }

  generateLyrics(): void {
    if (this.inputBox.nativeElement.value.length === 0) return;
    this.router.navigate(['/search', this.songTitle]);
    this.lyricsHandlerService.getLyrics(this.songTitle);
  }
}
