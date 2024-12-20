import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'playlist/:playlistId',
    component: PlaylistPageComponent,
  },
];
