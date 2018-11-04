import { Component } from '@angular/core';
import { IonicPage , NavController, NavParams, PopoverController } from 'ionic-angular';
import { MileagePage } from '../mileage/mileage';
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  details;
  results;
  public data:any;
  public items:any;
  public empty:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: PopoverController) {

  }

  presentPopover() {
    this.navCtrl.push(AboutPage)
  }
  
  getData(){
    var ret = JSON.parse(localStorage.getItem('mileageDetails'));  
    this.results = this.details ;
    if(!ret){
      this.empty = "No logs Found";
      console.log("No logs Found");
    }
    else{
      this.empty = '';
      this.items = ret.reverse();
      console.log(ret)
    }  
  }
  
  plus(){
    let  plusModal = this.modalCtrl.create(MileagePage);
    plusModal.present();
    plusModal.onDidDismiss(data=>{
      if(data){
          this.ionViewDidEnter();
        }
    });
  }
  
  ionViewDidEnter(){
    this.getData();   
  }
   
}
  
