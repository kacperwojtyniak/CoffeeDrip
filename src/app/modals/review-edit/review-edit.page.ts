import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ReviewModel } from '../../models/review.model';
import { CoffeesProviderService } from '../../services/coffees-provider.service';
import { CoffeeReviewsRepositoryService } from 'src/app/services/reviews-repository.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.page.html',
  styleUrls: ['./review-edit.page.scss'],
})
export class ReviewEditPage implements OnInit {

  public title = 'Review';
  public review: ReviewModel;

  constructor(private viewCtrl: ModalController,
    private navParams: NavParams,
    private coffeeProvider: CoffeeReviewsRepositoryService,
    private authService: AuthService) {

    this.review = this.navParams.get('review');
  }

  ngOnInit() {
  }

  public save(): void {

    if (!this.review.id) {
      this.review.authorId = this.authService.getUserId();
      this.review.author = this.authService.getUserName();
      this.coffeeProvider.addReview(this.review);
    }
    else {
      this.coffeeProvider.updateReview(this.review);
    }
    this.viewCtrl.dismiss();
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
