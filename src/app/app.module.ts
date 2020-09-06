import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSeriesComponent } from './components/add-series/add-series.component';
import { RatingModule } from 'ng-starrating';
import { RatingComponent } from './components/rating/rating.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegistrationComponent } from './components/registration/registration.component';
import { PosterComponent } from './components/poster/poster.component';
import { DiscoverComponent } from './components/discover/discover.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AddSeriesComponent,
    RatingComponent,
    NavBarComponent,
    SeriesListComponent,
    RegistrationComponent,
    PosterComponent,
    DiscoverComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    RatingModule,
    MatSlideToggleModule,
    MatStepperModule,
    HttpClientModule,
    MatTableModule,
    NgbModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    NgxPaginationModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
