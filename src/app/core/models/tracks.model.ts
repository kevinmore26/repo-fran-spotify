import { ArtistModel } from "./artist.model";

export interface TrackModel {
    cover: string;
    album: string;
    name: string;    
    url: string;
    _id: string | number;
    artist?: ArtistModel;
    }
    