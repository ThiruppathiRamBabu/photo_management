import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private photoservice: PhotoService) {
    
  }
}



