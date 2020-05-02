import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  public getUsers() {
    return this.firestore.collection('usuarios').doc('PCJ2nQWkh0OcNZJSSdA3').snapshotChanges();
  }
}
