import { Component, inject } from '@angular/core';
import { SpotifyApiService } from '../../services/spotify-api/spotify-api.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
})
export class LoginComponent {
  spotifyApiService = inject(SpotifyApiService);

  async login() {
    const authorizeURL = await this.spotifyApiService.login();
    window.location.href = authorizeURL;
  }
}
