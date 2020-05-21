import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { RecipiesRepositoryService } from 'src/app/services/recipies-repository.service';
import { RecipyModel } from '../../models/recipy.model';

@Component({
  selector: 'app-recipy-edit',
  templateUrl: './recipy-edit.page.html',
  styleUrls: ['./recipy-edit.page.scss'],
})
export class RecipyEditPage implements OnInit {

  public title = 'add recipy';
  public recipy: RecipyModel;
  
  constructor(private viewCtrl: ModalController,
    private navParams: NavParams,
    private recipiesRepository: RecipiesRepositoryService,
    private authService: AuthService) {
      this.recipy = this.navParams.get('recipy');
     }

  ngOnInit() {
  }

  public save(): void {
    if (!this.recipy.id) {
      this.recipy.authorId = this.authService.getUserId();
      this.recipy.author = this.authService.getUserName();
      this.recipiesRepository.addRecipy(this.recipy);
    }
    else {
      // update
    }
    this.viewCtrl.dismiss();
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
