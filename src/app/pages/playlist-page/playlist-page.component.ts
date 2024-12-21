import { Component, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpotifyApiService } from '../../services/spotify-api/spotify-api.service';
import { TrackComponent } from '../../components/track/track.component';

@Component({
  selector: 'app-playlist-page',
  imports: [RouterLink, TrackComponent],
  templateUrl: './playlist-page.component.html',
  styleUrl: './playlist-page.component.less',
})
export class PlaylistPageComponent implements OnInit {
  spotifyApiService = inject(SpotifyApiService);
  playlistId = input.required<string>();
  tracks = signal<SpotifyApi.TrackObjectFull[]>([]);

  async ngOnInit() {
    this.tracks.set(
      await this.spotifyApiService.getPlaylistTracks(this.playlistId())
    );
  }
}
