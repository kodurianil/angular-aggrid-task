import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallsService } from './api-calls.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { GridActionComponent } from './grid-action/grid-action.component';
import { MinMaxValidatorDirective } from './min-max-validator.directive';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([
      GridActionComponent
    ]),
    HttpClientModule,
    NgbDatepickerModule
 ],
  declarations: [ AppComponent, UserRegistrationComponent, GridActionComponent, MinMaxValidatorDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ApiCallsService]
})
export class AppModule { }
