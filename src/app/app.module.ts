import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VcDemo1Component } from './vc-demo1/vc-demo1.component';
import { VcDemo2Component } from './vc-demo2/vc-demo2.component';
import { VcDemo3Component } from './vc-demo3/vc-demo3.component';
import { MessageDirective } from './message.directive';
import { WriterComponent } from './writer/writer.component';

@NgModule({
  declarations: [
    AppComponent,
    VcDemo1Component,
    VcDemo2Component,
    VcDemo3Component,
    MessageDirective,
    WriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
