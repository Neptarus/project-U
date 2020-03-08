import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoresComponent } from './autores/autores.component';
import { AutoresListComponent } from './autores/autores-list/autores-list.component';
import { AutorService } from './Autor/autor-service';
import { ArtigoService } from './Artigo/artigo-service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

//prime ng
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { LeitoresComponent } from './Leitores/leitores.component';
import { LeitoresListComponent } from './Leitores/leitores-list/leitores-list.component';
import { LeitorService } from './Leitor/leitor-service';

@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    AutoresListComponent,
    LeitoresComponent,
    LeitoresListComponent
  ],
  entryComponents:[
    AutoresListComponent,
    LeitoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,   
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  providers: [AutorService, ArtigoService, LeitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
