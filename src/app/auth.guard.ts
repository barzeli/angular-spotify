import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SpotifyApiService } from './spotify-api/spotify-api.service';

export const authGuard: CanActivateFn = async (route) => {
  const spotifyApiAuthorizationCode = route.queryParams['code'];
  if (spotifyApiAuthorizationCode) {
    await inject(SpotifyApiService).setAccessToken(spotifyApiAuthorizationCode);
    return true;
  } else {
    return inject(Router).parseUrl('/login');
  }
};
