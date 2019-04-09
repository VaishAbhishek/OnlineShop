import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  getProduct(pid) {
    return this.afs.collection('products').doc(pid).valueChanges();
  }
}
