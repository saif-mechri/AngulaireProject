import { Component,Input , OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-face-snap-dsi21',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap-dsi21.component.html',
  styleUrl: './face-snap-dsi21.component.scss'
})
export class FaceSnapDSI21Component implements OnInit{

  buttonText!:string ;
  @Input() faceSnap!:FaceSnap;

  ngOnInit() {
    this.buttonText = "Oh Snap"
  }
  onSnap(){
    if(this.buttonText == "Oh Snap"){
      this.buttonText = "Oops, unSnap!"
      this.faceSnap.snaps++;
    }else{
       this.buttonText = "Oh Snap";
       this.faceSnap.snaps--;
    }
  }


}

