import { Component ,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapDSI21Component } from '../face-snap-dsi21/face-snap-dsi21.component';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapDSI21Component ,CommonModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!:FaceSnap[];

  constructor(private faceSnap_Service:FaceSnapsService){

  }
  ngOnInit(): void {
    this.faceSnaps = this.faceSnap_Service.faceSnaps;
  }
}
