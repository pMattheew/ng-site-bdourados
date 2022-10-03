import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionAppComponent } from './components/section-app/section-app.component';
import { SectionABarbeariaComponent } from './components/section-a-barbearia/section-a-barbearia.component';
import { SectionServicosComponent } from './components/section-servicos/section-servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    HomeComponent,
    SectionAppComponent,
    SectionABarbeariaComponent,
    SectionServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
