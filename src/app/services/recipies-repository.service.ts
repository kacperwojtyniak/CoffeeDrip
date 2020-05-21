import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RecipyModel } from '../models/recipy.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RecipiesRepositoryService {

  constructor(private db: AngularFirestore) {}

  public getRecipies(coffeeId: string) : Observable<RecipyModel[]> {
    return this.db.collection<RecipyModel>('recipies', q => q.where('coffeeId', '==', coffeeId))
     .snapshotChanges()
     .pipe(
       map(actions =>{
         return actions.map(a=> {
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return {id, ...data};
         })
       }));
   }

   
   public addRecipy(review: RecipyModel): void {
    this.db.collection<RecipyModel>('recipies').add(review);
  }
}
