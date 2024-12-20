import { Component, input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playlist',
  imports: [NgOptimizedImage, RouterLink, ContainerComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.less',
})
export class PlaylistComponent {
  playlist = input.required<SpotifyApi.PlaylistObjectSimplified>();
}
