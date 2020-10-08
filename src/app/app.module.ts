import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallsService } from './api-calls.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule
 ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiCallsService]
})
export class AppModule { }
