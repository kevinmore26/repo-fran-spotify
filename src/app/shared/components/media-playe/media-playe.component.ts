import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //Todo : programacion reactiva

@Component({
  selector: 'app-media-playe',
  templateUrl: './media-playe.component.html',
  //styleUrl: './media-playe.component.css'
  styleUrls: ['./media-playe.component.css'] // Cambiado a styleUrls con "s"
})

export class MediaPlayeComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a1cc9431ffacc1b7be877d61975dfc8.jpg',
    album: 'Gioly & Assia',
    name: 'BEBE(Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion...', response);
        this.mockCover = response;  // Aquí asignas la canción recibida al objeto de la vista
      }
    );
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
  }

}

