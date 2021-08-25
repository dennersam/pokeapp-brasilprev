import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.modules';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokemonService } from './shared/services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeListComponent,
    PokeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
    FlexLayoutModule

  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
