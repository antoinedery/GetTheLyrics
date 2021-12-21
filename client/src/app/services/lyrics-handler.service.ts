declare var require: any;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LyricsHandlerService {
  getLyrics(songTitle: string) {
    console.log(songTitle);
  }

  //async getLyrics(songTitle:string):Promise<void>{
  //console.log(await genius.getLyrics(options));
  //genius.getLyrics(options).then((lyrics: any) => console.log(lyrics));
  //}
}
