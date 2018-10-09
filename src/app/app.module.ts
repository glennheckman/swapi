import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { CharactersModule } from './characters/characters.module';
import { FilmsModule } from './films/films.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CharactersModule,
    FilmsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  providers: [
    //DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// declaration = components and directives
// imports = modules
// providers = services and factories
