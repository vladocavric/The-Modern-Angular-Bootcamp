import {Component, OnInit} from '@angular/core';
import {PhotoService} from './photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photoSrc = '';

  getPhotoSrc() {
    this.photo.getRandomPhoto().subscribe(url => {
      this.photoSrc = url;
    });
  }

  constructor(private photo: PhotoService) {
   this.getPhotoSrc();
  }

  ngOnInit(): void {
  }

  onGetPhoto() {
   this.getPhotoSrc();
  }

}
