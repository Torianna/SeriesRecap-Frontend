import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { AddSeriesComponent } from './components/add-series/add-series.component';
import { RatingComponent } from './components/rating/rating.component';
import { SeriesListComponent } from './components/series-list/series-list.component';



const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  },
  {
    path: 'series',
    component: SeriesListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addSeries',
    component: AddSeriesComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
