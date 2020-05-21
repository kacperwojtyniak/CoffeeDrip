import { Component, OnInit } from '@angular/core';
import { RecipyModel } from 'src/app/models/recipy.model';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipy',
  templateUrl: './recipy.component.html',
  styleUrls: ['./recipy.component.scss']
})
export class RecipyDetails implements OnInit {

  public recipy: RecipyModel;

  constructor(
    private navParams: NavParams, 
    private viewCtrl: ModalController) {

      this.recipy = this.navParams.get('recipy');
      
     }

  ngOnInit() {
  } 

  dismiss() {
    this.viewCtrl.dismiss();    
  }
}
