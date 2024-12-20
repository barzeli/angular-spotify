import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpotifyApiService } from '../../services/spotify-api/spotify-api.service';

@Component({
  selector: 'app-playlist-page',
  imports: [RouterLink],
  templateUrl: './playlist-page.component.html',
  styleUrl: './playlist-page.component.less',
})
export class PlaylistPageComponent implements OnInit {
  spotifyApiService = inject(SpotifyApiService);
  playlistId = input.required<string>();

  ngOnInit(): void {
    this.spotifyApiService.getPlaylistTracks(this.playlistId());
  }
}
