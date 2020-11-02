import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { Step2Component } from './step2/step2.component';
import { Step1Component } from './step1/step1.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    Step2Component,
    Step1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
