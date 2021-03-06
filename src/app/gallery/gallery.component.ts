import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import * as  _ from "lodash";
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryImageSize } from 'ngx-gallery';
import { ArtComponent } from "../art/art.component";
import { Gallery } from "../models/gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  providers: [AngularFirestore],
  styleUrls: ['./gallery.component.scss']
})



export class GalleryComponent implements OnInit {

  @Input('qty') qty: number;

  galleryImages: NgxGalleryImage[];
  galleryOptions: NgxGalleryOptions[];

  @Input('gallery-folder') galleryFolder: string;
  @Input('gallery-name') galleryName: string;

  @Input('description') description: string;
  galleryPath: string = "../../assets/img/" + this.galleryFolder;
  galleriesCollection: AngularFirestoreCollection<Gallery>;
  galleries: Observable<Gallery[]>;
  record : any;



  constructor(private afs: AngularFirestore) {




  }

  ngOnInit() {
    this.galleriesCollection = this.afs.collection('galleries');
    this.galleries = this.galleriesCollection.valueChanges();






    let numImages = _.range(1, (this.qty + 1));
    let tempArray = [];
    for (let i of numImages) {
      let bigUrl = "../../assets/img/" + this.galleryFolder + "/full/" + i + ".jpg";
      let thumbUrl = "../../assets/img/" + this.galleryFolder + "/thumbs/" + i + ".jpg";




      tempArray.push({

        small: thumbUrl,
        medium: bigUrl,
        big: bigUrl


      });
    }
    this.galleryImages = tempArray;
    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 5,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnailSize: NgxGalleryImageSize.Contain,
        imageSwipe: true,
        thumbnailsSwipe: true,
        previewKeyboardNavigation: true,
        imageArrowsAutoHide : true,
        arrowPrevIcon : 'fa fa-angle-left',
        arrowNextIcon : 'fa fa-angle-right'
      }
    ];



  }
}
