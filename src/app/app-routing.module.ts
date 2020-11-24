import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { AddSeriesComponent } from './components/add-series/add-series.component';
import { RatingComponent } from './components/rating/rating.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PosterComponent } from './components/poster/poster.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { ShareComponent } from './components/share/share.component';
import { ShareLinkComponent } from './components/share-link/share-link.component';


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
    path: 'generateLink',
    component: ShareLinkComponent
  },
  {
    path: 'share',
    component: ShareComponent
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
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'poster',
    component: PosterComponent
  },
  {
    path: '',
    redirectTo: 'poster',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
