import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoffeesProviderService } from '../services/coffees-provider.service';
import { CoffeeModel } from '../models/coffee.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.page.html',
  styleUrls: ['./coffees.page.scss'],
})
export class CoffeesPage implements OnInit, OnDestroy {
 

  private coffeeList: CoffeeModel[];
  public filteredList: CoffeeModel[];
  public filter: string = '';
  private sub: Subscription;

  constructor(private coffeeProvider: CoffeesProviderService, private navigator: Router) { }

  ngOnInit() {
    this.sub = this.coffeeProvider.getCoffees().subscribe(coffees => {
      this.coffeeList = coffees;
      this.filteredList = this.coffeeList;
    });    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public filterList(): void {
    const filterPhrase = this.filter.toLowerCase();
    this.filteredList = this.coffeeList.filter((coffee) => {
      return coffee.name.toLowerCase().indexOf(filterPhrase) > -1 ||
        coffee.roastery.toLowerCase().indexOf(filterPhrase) > -1 ||
        coffee.country.toLowerCase().indexOf(filterPhrase) > -1
    });
  }

  public nav(coffeeId:string) {    
    this.navigator.navigate(['./tabs/coffeeDetails/'+coffeeId]);
  }

}
