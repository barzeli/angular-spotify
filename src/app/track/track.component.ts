import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SpotifyApiService } from '../spotify-api/spotify-api.service';
import { NgOptimizedImage } from '@angular/common';
import { ContainerComponent } from '../container/container.component';

@Component({
    selector: 'app-track',
    imports: [NgOptimizedImage, ContainerComponent],
    templateUrl: './track.component.html',
    styleUrl: './track.component.less'
})
export class TrackComponent implements OnInit {
  spotifyApiService = inject(SpotifyApiService);

  trackId = '1H5IfYyIIAlgDX8zguUzns';

  track = signal<SpotifyApi.SingleTrackResponse | undefined>(undefined);
  artists = computed(() =>
    this.track()
      ? this.track()
          ?.artists.map((artist) => artist.name)
          .join(', ')
      : undefined
  );

  async ngOnInit() {
    this.track.set(await this.spotifyApiService.getTrackById(this.trackId));
  }
}
