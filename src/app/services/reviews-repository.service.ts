import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ReviewModel } from '../models/review.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeReviewsRepositoryService {

  constructor(private db: AngularFirestore) {}

   public getReviewsByCoffeeId(coffeeId: string) : Observable<ReviewModel[]> {
    return this.db.collection<ReviewModel>('reviews', q => q.where('coffeeId', '==', coffeeId))
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

   public addReview(review: ReviewModel): void {
    this.db.collection<ReviewModel>('reviews').add(review);
  }

  public updateReview(review: ReviewModel): void {
   this.db.collection<ReviewModel>('reviews').doc(review.id).update(review);
 }

}
