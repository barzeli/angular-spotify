import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrackComponent } from './components/track/track.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {}
