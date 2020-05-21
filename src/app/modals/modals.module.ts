import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ReviewEditPage } from './review-edit/review-edit.page';
import { ReviewDetailsPage } from './review-details/review-details.page';
import { RecipyEditPage } from './recipy-edit/recipy-edit.page';
import { Routes, RouterModule } from '@angular/router';
import { RecipyDetails } from './recipy/recipy.component';

const routes: Routes = [
  {
    path: 'reviewEdit',
    component: ReviewEditPage
  },
  {
    path: 'reviewDetails',
    component: ReviewDetailsPage
  },
  {
    path: 'recipyEdit',
    component: RecipyEditPage
  },
  {
    path: 'recipyDetails',
    component: RecipyDetails
  }
];

@NgModule({
  declarations: [
    ReviewEditPage,
    ReviewDetailsPage,
    RecipyEditPage,
    RecipyDetails],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ModalsModule { }
