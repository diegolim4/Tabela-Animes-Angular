import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimeListComponent } from './animes/anime-list.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
