import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SpotifyApiService } from './spotify-api/spotify-api.service';

export const authGuard: CanActivateFn = async (route) => {
  const spotifyApiService = inject(SpotifyApiService);
  const access_token = localStorage.getItem('access_token');
  const refresh_token = localStorage.getItem('refresh_token');
  if (access_token && refresh_token) {
    await spotifyApiService.setAccessToken(access_token, refresh_token);
  } else {
    const spotifyApiAuthorizationCode = route.queryParams['code'];
    if (spotifyApiAuthorizationCode) {
      await spotifyApiService.getAccessToken(spotifyApiAuthorizationCode);
    }
  }

  const user = await spotifyApiService.getUser();
  if (user) {
    return true;
  } else {
    localStorage.clear();
    return inject(Router).parseUrl('/login');
  }
};
