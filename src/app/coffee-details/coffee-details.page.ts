import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoffeeModel } from '../models/coffee.model';
import { CoffeesProviderService } from '../services/coffees-provider.service';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.page.html',
  styleUrls: ['./coffee-details.page.scss'],
})
export class CoffeeDetailsPage implements OnInit, OnDestroy {

  public coffeeSubscription: Subscription;
  public coffee: CoffeeModel;
  public section = 'description';

  constructor(
    private route: ActivatedRoute,
    private coffeeProvider: CoffeesProviderService) {
    console.log('details loaded');
  }

  ngOnInit() {
    this.getCoffee();
  }

  ngOnDestroy() {
    console.log('on destroy DETAILS');
    this.coffeeSubscription.unsubscribe();
  }

  private getCoffee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.coffeeSubscription = this.coffeeProvider.getCoffee(id).subscribe(coffee => {
      this.coffee = coffee
    });
  }

  public segmentChanged(event): void {
    this.section = event.detail.value;
  }
}
