import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workpage',
  templateUrl: './workpage.page.html',
  styleUrls: ['./workpage.page.scss'],
})
export class WorkpagePage {
  galleryData: any = [];
  selectedImageSrc: string | null = null;
  constructor() {
    let data: any = localStorage.getItem('gallery');
    if (data) {
      this.galleryData = JSON.parse(data);
    }
    else {
      this.galleryData = [];
    }
    console.log('gallery',this.galleryData);
    
    this.selectedImageSrc = localStorage.getItem('selectedImage');
  }
  

}
