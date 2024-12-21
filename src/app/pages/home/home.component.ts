import { Component, inject, OnInit, signal } from '@angular/core';
import { SpotifyApiService } from '../../services/spotify-api/spotify-api.service';
import { PlaylistComponent } from '../../components/playlist/playlist.component';

@Component({
  selector: 'app-home',
  imports: [PlaylistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  spotifyApiService = inject(SpotifyApiService);
  userName = this.spotifyApiService.userName;

  playlists = signal<SpotifyApi.PlaylistObjectSimplified[]>([]);

  async ngOnInit() {
    this.playlists.set(await this.spotifyApiService.getUserPlaylists());
  }

  logout() {
    this.spotifyApiService.logout();
  }
}
