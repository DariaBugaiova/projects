import { BrowserModule } from '@angular/platform-browser';
import {CdkTable} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPipe } from './search.pipe';
import { HoverDirective } from './hover.directive';
import { ItemPageComponent } from './item-page/item-page.component';
import {HttpClientModule} from '@angular/common/http';
import {DogServiceService} from './dog-service.service';
import { FormPushCardComponent } from './form-push-card/form-push-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Dog} from './dog';
import { Routes, RouterModule} from '@angular/router';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormDeleteDogsComponent } from './form-delete-dogs/form-delete-dogs.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatIconModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatSnackBarModule, MatToolbarModule, MatTabGroup, MatFormFieldModule, MatInputModule, MatError, MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BreedPageComponent } from './breed-page/breed-page.component';
import { TrainingPageComponent } from './training-page/training-page.component';
import { MatTabContentComponent } from './mat-tab-content/mat-tab-content.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  // {path: 'setup', component: SetupPageComponent},
  {path: 'item/:id', component: ItemPageComponent},
  {path: 'contacts', component: ContactPageComponent},
  {path: 'breed', component: BreedPageComponent},
  {path: 'training', component: TrainingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DogCardComponent,
    DogListComponent,
    HomePageComponent,
    SearchPipe,
    HoverDirective,
    ItemPageComponent,
    FormPushCardComponent,
    FormSearchComponent,
    FormDeleteDogsComponent,
    MainMenuComponent,
    ContactPageComponent,
    BreedPageComponent,
    TrainingPageComponent,
    MatTabContentComponent,
    ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    LayoutModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PlatformModule,
    MatTabsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [DogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
