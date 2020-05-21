import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { CoffeeDetailsPage } from './coffee-details.page';
import { RecipiesListComponent } from './recipies-list/recipies-list.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';



const routes: Routes = [
  {
    path: ':id',
    component: CoffeeDetailsPage
  }
];

@NgModule({  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CoffeeDetailsPage, RecipiesListComponent, ReviewsListComponent]
})
export class CoffeeDetailsPageModule {}
