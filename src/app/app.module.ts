import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule, MatStepperModule, MatTableModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSeriesComponent } from './components/add-series/add-series.component';
import { RatingModule } from 'ng-starrating';
import { RatingComponent } from './components/rating/rating.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesService } from './services/series.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AddSeriesComponent,
    RatingComponent,
    NavBarComponent,
    SeriesListComponent
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
