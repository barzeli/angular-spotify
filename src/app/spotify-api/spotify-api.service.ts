import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-node';
// @ts-ignore
import SpotifyWebApiServer from 'spotify-web-api-node/src/server-methods';
import { environment } from '../../environments/environment';

interface Response<T> {
  body: T;
  headers: Record<string, string>;
  statusCode: number;
}

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  spotifyApi;

  constructor() {
    // @ts-ignore
    SpotifyWebApi._addMethods(SpotifyWebApiServer);
    this.spotifyApi = new SpotifyWebApi({
      clientId: environment.clientId,
      clientSecret: environment.clientSecret,
      redirectUri: environment.redirectUri,
    });
  }

  async login() {
    return this.spotifyApi.createAuthorizeURL(
      [
        'ugc-image-upload',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'app-remote-control',
        'streaming',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-private',
        'playlist-modify-public',
        'user-follow-modify',
        'user-follow-read',
        'user-read-playback-position',
        'user-top-read',
        'user-read-recently-played',
        'user-library-modify',
        'user-library-read',
        'user-read-email',
        'user-read-private',
      ],
      'state_string_wow!',
      false
    );
  }

  async setAccessToken(code: string) {
    const { access_token, refresh_token } = (
      await this.spotifyApi.authorizationCodeGrant(code)
    ).body;

    this.spotifyApi.setAccessToken(access_token);
    this.spotifyApi.setRefreshToken(refresh_token);
  }

  async proccessApiRequest<T>(response: Promise<Response<T>>) {
    return (await response).body;
  }

  async getUser() {
    return this.proccessApiRequest(this.spotifyApi.getMe());
  }

  async getUserPlaylists() {
    return (await this.proccessApiRequest(this.spotifyApi.getUserPlaylists()))
      .items;
  }

  async getPlaylist(playlistId: string) {
    return await this.proccessApiRequest(
      this.spotifyApi.getPlaylist(playlistId)
    );
  }

  async getPlaylistTracks(playlistId: string) {
    const tracktotal = (
      await this.proccessApiRequest(
        this.spotifyApi.getPlaylistTracks(playlistId)
      )
    ).total;
    return await this.proccessApiRequest(
      this.spotifyApi.getPlaylistTracks(playlistId)
    );
  }

  async getTrackById(trackId: string) {
    return this.proccessApiRequest(this.spotifyApi.getTrack(trackId));
  }
}
