import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThaisComponent } from './thais/thais.component';
import { ThaisdetalhesComponent } from './thaisdetalhes/thaisdetalhes.component';
import { ThaislistaComponent } from './thaislista/thaislista.component';
import { ThaisdisciplinasService } from './thaisdisciplinas.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    { path: '', component: ThaisComponent },
    { path: 'thaisdetalhes', component: ThaisdetalhesComponent},
    { path: 'thaislista', component: ThaislistaComponent },
  ]),
 ],
  declarations: [ AppComponent, HelloComponent, ThaisComponent, ThaisdetalhesComponent, ThaislistaComponent ],

  providers: [ThaisdisciplinasService],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
