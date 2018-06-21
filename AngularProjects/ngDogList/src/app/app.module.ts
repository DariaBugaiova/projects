import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent, /*UpperCaseDirective, IfNotDirective*/ } from './app.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { ChangeTitleComponent } from './change-title/change-title.component';
import {TitleService} from "./title.service";
@NgModule({
  declarations: [
    AppComponent,
    DogDetailsComponent,
    DogListComponent,
    // UpperCaseDirective,
    // IfNotDirective,
    ChangeTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
