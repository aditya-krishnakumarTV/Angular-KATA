import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormComponent } from './templateForms/template.component';
import { ReactiveFormComponent } from './reactiveForms/reactiveForms.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DummyComponent } from './dummy/dummy.component';

import { ShortenPipe } from './shared/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DummyComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
