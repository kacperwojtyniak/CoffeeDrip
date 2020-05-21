import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams } from '@ionic/angular';
import { ReviewModel } from '../../models/review.model';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.page.html',
  styleUrls: ['./review-details.page.scss'],
})
export class ReviewDetailsPage implements OnInit {

  public review: ReviewModel;

  constructor(
    private navParams: NavParams, 
    private viewCtrl: ModalController) {

      this.review = this.navParams.get('review');
      
     }

  ngOnInit() {
  } 

  dismiss() {
    this.viewCtrl.dismiss();    
  }
}
