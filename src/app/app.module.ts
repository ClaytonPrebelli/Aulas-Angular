import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './templates/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CorpoComponent } from './templates/corpo/corpo.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoComponent } from './views/contato/contato.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './views/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CorpoComponent,
    ContatoComponent,
    FooterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
