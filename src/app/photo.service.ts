import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private firestore : Firestore) {}
  get(){
    console.log('service');
    const data = collection(this.firestore, '1');
    return collectionData(data);
  }
}
