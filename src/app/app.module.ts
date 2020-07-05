import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { ListProventosComponent } from './list-proventos/list-proventos.component';
import { ListProventoService } from './list-proventos/list-proventos.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ListProventosComponent   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ListProventoService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
