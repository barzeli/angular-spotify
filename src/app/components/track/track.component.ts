import { Component, computed, inject, input } from '@angular/core';
import { SpotifyApiService } from '../../services/spotify-api/spotify-api.service';
import { NgOptimizedImage } from '@angular/common';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-track',
  imports: [NgOptimizedImage, ContainerComponent],
  templateUrl: './track.component.html',
  styleUrl: './track.component.less',
})
export class TrackComponent {
  spotifyApiService = inject(SpotifyApiService);
  track = input.required<SpotifyApi.TrackObjectFull>();

  artists = computed(() =>
    this.track()
      ? this.track()
          .artists.map((artist) => artist.name)
          .join(', ')
      : undefined
  );
}
