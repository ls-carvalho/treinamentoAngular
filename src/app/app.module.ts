import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { OportunidadesCardComponent } from './oportunidades-card/oportunidades-card.component';
import { ContatoFormularioComponent } from './contato-formulario/contato-formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ContatoComponent,
    OportunidadesComponent,
    BlogCardComponent,
    OportunidadesCardComponent,
    ContatoFormularioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
