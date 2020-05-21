import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ReviewDetailsPage } from 'src/app/modals/review-details/review-details.page';
import { ReviewEditPage } from 'src/app/modals/review-edit/review-edit.page';
import { ReviewModel } from 'src/app/models/review.model';
import { AuthService } from 'src/app/services/auth.service';
import { CoffeeReviewsRepositoryService } from 'src/app/services/reviews-repository.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit, OnDestroy {

  @Input() coffeeId: string;

  public reviews: ReviewModel[];
  private reviewsSubscription: Subscription;

  constructor(
    private reviewsRepository: CoffeeReviewsRepositoryService,
    private modalController: ModalController,
    private authService: AuthService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.reviewsSubscription = this.reviewsRepository.getReviewsByCoffeeId(this.coffeeId).subscribe(revs => this.reviews = revs)
  }

  ngOnDestroy() {
    this.reviewsSubscription.unsubscribe();
  }

  public async openReview(review: ReviewModel) {
    const modal = await this.modalController.create({
      component: ReviewDetailsPage,
      componentProps: { 'review': review }
    });
    return await modal.present();
  }
  public canEdit(review: ReviewModel): boolean {
    // TODO: check if user is logged in and if it's his review/recipy
    return this.authService.isAuthorized() && this.authService.getUserId() === review.authorId;    
  }

  public async edit(event: any, review: ReviewModel) {
    event.stopPropagation();
    return await this.openReviewEditModal(review);
  }

  public async addReview() {
    // TODO: check if logged in and if he's already posted a review

    if(!this.authService.isAuthorized()) {
      await this.presentToast('TODO You need to be logged in to add a review.');
      return;
    }

    if(this.userHasReview()) {
      await this.presentToast('TODO You have already added a review for this coffee.');
      return;      
    }

    const emptyReview = this.createEmptyReview();
    return await this.openReviewEditModal(emptyReview);
  }

  private userHasReview(): boolean {
    return this.reviews.some(rev => rev.authorId === this.authService.getUserId());
  }
  private async openReviewEditModal(review: ReviewModel) {
    const modal = await this.modalController.create({
      component: ReviewEditPage,
      componentProps: { 'review': review }
    });
    return await modal.present();
  }

  private async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  private createEmptyReview(): ReviewModel {
    return {
      author: '',
      authorId: '',
      coffeeId: this.coffeeId,
      description: '',
      edited: false,
      rating: 0,
      title: ''
    }
  }


}
