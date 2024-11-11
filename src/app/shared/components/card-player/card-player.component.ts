import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  //styleUrl: './card-player.component.css'
  styleUrls: ['./card-player.component.css'] // Cambiado a styleUrls con "s"
})

export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {cover:'', album:'', name: '', url: '', _id: 0  };

  //constructor() { }
// Inyectamos el servicio MultimediaService
constructor(private multimediaService: MultimediaService) { }
  
    ngOnInit(): void {

    }
  
    sendPlay(track: TrackModel): void {
      console.log('Enviando cancion al reproductor', track);
      this.multimediaService.callback.emit(track);
    }
  
  }

