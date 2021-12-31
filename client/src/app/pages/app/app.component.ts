import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LyricsHandlerService } from '@app/services/lyrics-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(lyricsHandlerService: LyricsHandlerService, router: Router) {
    if (!lyricsHandlerService.isInitialize) router.navigate(['/home']);
  }
}
