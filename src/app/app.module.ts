import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { ErrorModule } from './error/error.module';
import { PrivacyModule } from './privacy/privacy.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PrivacyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    HomeModule,
    PrivacyModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
