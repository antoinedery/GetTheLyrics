import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './pages/app/app.component';
import { HomeSearchBarComponent } from './components/home-page-folder/search-bar/search-bar.component';
import { LyricsDisplayComponent } from './components/lyrics-display-folder/lyrics-display.component';
import { FooterComponent } from './components/home-page-folder/footer/footer.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { LyricsDisplayPageComponent } from './pages/lyrics-display-page/lyrics-display-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeSearchBarComponent,
    LyricsDisplayComponent,
    FooterComponent,
    LyricsDisplayPageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
