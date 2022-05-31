import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactS1Component } from './contact-s1/contact-s1.component';
import { ContactS2Component } from './contact-s2/contact-s2.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ContactS1Component,
    ContactS2Component,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
