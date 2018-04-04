import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  pages = [
    {
      "title": "RandomEyes",
      "category": "art",
      "description": "",
      "image": "../../assets/img/random-eyes/thumbs/1.jpg",
      "route" :"/random-eyes"
    },
    {
      "title": "3D Particle Systems",
      "category": "3d",
      "description": "",
      "image": "../../assets/img/particle-systems/thumbs/6.jpg",
      "route" :"/particles"
  
    },
    {
      "title": "Photography",
      "category": "photography",
      "description": "",
      "image": "../../assets/img/photos/thumbs/6.jpg",
      "route" :"/photos"
  
    },
    {
      "title": "Design",
      "category": "Design",
      "description": "",
      "image": "../../assets/img/design/thumbs/6.jpg",
      "route" :"/design"
  
    },
    {
      "title": "Procedural Forms",
      "category": "3D",
      "description": "",
      "image": "../../assets/img/procedural-forms/thumbs/6.jpg",
      "route" :"/procedural"
  
    },
    {
      "title": "Oscillation Painter Output",
      "category": "Code",
      "description": "",
      "image": "../../assets/img/osc-painter/thumbs/5.jpg",
      "route" :"/osc-paint-output"
  
    }
    
  ];
  constructor() { }

  ngOnInit() {
  }

}