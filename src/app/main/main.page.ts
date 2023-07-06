import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage{

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


