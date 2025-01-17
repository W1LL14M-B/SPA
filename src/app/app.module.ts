import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes

import { APP_ROUTING } from './app.routes';

//Servicios

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
