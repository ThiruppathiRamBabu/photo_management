import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {

  datas$!: Observable<any[]>;
  constructor(private photoservice: PhotoService) {
    this.datas$ = this.photoservice.get();
    this.datas$.pipe(
      tap(datas => {
        console.log("datas", datas);
      })
    ).subscribe()
    console.log('serve', this.datas$);
  }

}
