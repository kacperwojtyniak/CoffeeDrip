import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RecipyEditPage } from 'src/app/modals/recipy-edit/recipy-edit.page';
import { RecipyDetails } from 'src/app/modals/recipy/recipy.component';
import { RecipyModel } from 'src/app/models/recipy.model';
import { AuthService } from 'src/app/services/auth.service';
import { RecipiesRepositoryService } from 'src/app/services/recipies-repository.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.scss']
})
export class RecipiesListComponent implements OnInit, OnDestroy {

  @Input() coffeeId: string;

  private recipiesSubscription: Subscription;

  public recipies: RecipyModel[];

  constructor(
    private recipiesRepository: RecipiesRepositoryService,
    private modalController: ModalController,
    private authService: AuthService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.recipiesSubscription = this.recipiesRepository.getRecipies(this.coffeeId).subscribe(rec => this.recipies = rec);
  }

  ngOnDestroy() {
    this.recipiesSubscription.unsubscribe();
  }

  public canEdit(recipy: RecipyModel): boolean {
    return this.authService.isAuthorized() && this.authService.getUserId() === recipy.authorId;
  }

  public async openRecipy(recipy: RecipyModel) {

    const modal = await this.modalController.create({
      component: RecipyDetails,
      componentProps: { 'recipy': recipy }
    });
    return await modal.present();
  }

  public async edit(event: any, recipy: RecipyModel) {    
    event.stopPropagation();
    return await this.openRecipyEditModal(recipy);
  }

  public async addRecipy() {
    if(!this.authService.isAuthorized()) {
      await this.presentToast();
      return;
    }
    const emptyRecipie = this.createEmptyRecipy();
    this.openRecipyEditModal(emptyRecipie);
  }

  private async openRecipyEditModal(recipy: RecipyModel) {
    const modal = await this.modalController.create({
      component: RecipyEditPage,
      componentProps: { 'recipy': recipy }
    });
    return await modal.present();
  }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'TODO You need to be logged in to add a recipy.',
      duration: 2000
    });
    toast.present();
  }

  private createEmptyRecipy(): RecipyModel {
    return {
      author: '',
      authorId: '',
      coffeeId: this.coffeeId,
      description: '',
      edited: false,
      ratingScore: 0,
      votes: 0
    }
  }
}
