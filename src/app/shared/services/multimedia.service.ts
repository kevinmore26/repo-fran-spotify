import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
//import EventEmitter from 'events';
//import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>()
  //callback: EventEmitter<TrackModel> = new EventEmitter<TrackModel>(); // Especifica el tipo que emite
constructor() { }
}
