import { Injectable } from '@angular/core';
import { CoffeeModel } from '../models/coffee.model';
import { ReviewModel } from '../models/review.model';
import { RecipyModel } from '../models/recipy.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CoffeesProviderService {  
  
  private coffeesFromFirebase: AngularFirestoreCollection<CoffeeModel>;
  private coffeeList: Observable<CoffeeModel[]>;

  constructor(private db: AngularFirestore) {

    this.coffeesFromFirebase = this.db.collection<CoffeeModel>('coffees');

    this.coffeeList = this.coffeesFromFirebase.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a=> {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data};
        })
      })
    );
   }

   public getCoffees() : Observable<CoffeeModel[]> {
     return this.coffeeList;
   }
  

  public getCoffee(id: string): Observable<CoffeeModel> {    
    return this.coffeesFromFirebase.doc<CoffeeModel>(id).snapshotChanges().pipe(
      map(actions => {        
        return {id,...actions.payload.data()};
        })
    );
  }
}
