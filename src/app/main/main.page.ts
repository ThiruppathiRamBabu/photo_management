import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PhotoService } from '../photo.service';
import { Swiper } from 'swiper/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage{
  @ViewChild('swiper')
  sweiperRef: ElementRef | undefined;
  swiper?: Swiper;

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
 
  datas$!: Observable<any[]>;
  constructor(private photoservice: PhotoService, private router: Router) {
    this.datas$ = this.photoservice.get();
    this.datas$.pipe(
      tap(datas => {
        console.log("datas", datas);
      })
    ).subscribe()
    console.log('serve', this.datas$);
  }
  // swiperSlideChanged(e:any){
  //   console.log('changed',e);
  // }
  // swiperReady(){
  //   this.swiper = this.sweiperRef?.nativeElement.swiper;
  // }
  // goPrev(){
  //   this.swiper?.slidePrev();
  // }
  // goNext(){
  //   this.swiper?.slideNext();
  // }
  // chunkArray(array: any[], size: number): any[] {
  //   const chunks = [];
  //   for (let i = 0; i < array.length; i += size) {
  //     chunks.push(array.slice(i, i + size));
  //   }
  //   return chunks;
  // }
  // swiperNavigation = {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'
  // };
  choosePhotos() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }
  handleFileInput(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      const fileData = fileArray.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size,
      }));
      localStorage.setItem('gallery', JSON.stringify(fileData));
      console.log('FILES', fileData);
      this.router.navigate(['/workpage']);
    }
  }
  // handleFileInput(event: Event) {
  //   const files = (event.target as HTMLInputElement).files;
  //   if (files && files.length > 0) {
  //     const imageArray:any = [];
  //     for (let i = 0; i < files.length; i++) {
  //       const file = files[i];
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         const imageData = {
  //           name: file.name,
  //           type: file.type,
  //           size: file.size,
  //           url: e.target.result
  //         };
  //         imageArray.push(imageData);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //     localStorage.setItem('gallery', JSON.stringify(imageArray));
  //     console.log('FILES', imageArray);
  //     this.router.navigate(['/workpage']);
  //   }
  // }
  
  // choosePhotos() {
  //   this.fileInput.nativeElement.click();
  // }

  // handleFileInput(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (e: any) => {
  //     const imageSrc = e.target.result;
  //     localStorage.setItem('selectedImage', imageSrc);
  //   };

  //   reader.readAsDataURL(file);
  // }
  
  
}


