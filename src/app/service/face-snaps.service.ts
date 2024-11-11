import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps:FaceSnap[] = [
    {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 0
    },
    {
      title: 'three rock mountain',
      description: 'endroit magnifique',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createDate: new Date(),
      snaps: 0
    },
    {
      title: 'un bon repas',
      description: 'yumm c\' bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createDate: new Date(),
      snaps: 0
    }
  ];

  

  constructor() { }
}
