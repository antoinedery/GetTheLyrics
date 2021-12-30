import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './pages/app/app.component';
import { HomeSearchBarComponent } from './components/home-page-folder/search-bar/search-bar.component';
import { LyricsDisplayComponent } from './components/lyrics-display-folder/lyrics-display/lyrics-display.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { LyricsDisplayPageComponent } from './pages/lyrics-display-page/lyrics-display-page.component';
import { NavigationBarComponent } from './components/lyrics-display-folder/navigation-bar/navigation-bar.component';
import { SearchBarLyricsComponent } from './components/lyrics-display-folder/search-bar-lyrics/search-bar-lyrics.component';
import { AppMaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeSearchBarComponent,
    LyricsDisplayComponent,
    FooterComponent,
    LyricsDisplayPageComponent,
    NavigationBarComponent,
    SearchBarLyricsComponent,
  ],
  imports: [AppMaterialModule, BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
