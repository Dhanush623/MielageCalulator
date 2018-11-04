import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController,ViewController, NavParams } from 'ionic-angular';
// import { DashboardPage } from '../dashboard/dashboard'
import { ToastController }from 'ionic-angular';



/**
 * Generated class for the MileagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mileage',
  templateUrl: 'mileage.html',
})
export class MileagePage {
  currentDate : string = new Date().toLocaleDateString();
  constructor(public navCtrl: NavController,public toastctrl:ToastController,public viewCtrl: ViewController ,private alertCtrl: AlertController, public navParams: NavParams) {
  }
  detail = {
    totalMileage: 0 ,
    mileage : '' ,
    price: '',
  };
  calculateMileage(details){
    var totalMileage = details.totalMileage;
    var currentMileage = details.currentMileage;
    // var mileage = details.mileage;
    var petrol = details.petrol;
    var place = details.place;
    var price = details.price;
    // var date = new Date().toDateString;
    var calculatePrice;
    // var totalPrice = details.totalPrice;
    var distance = currentMileage - totalMileage ;
    var calculate;
    if(totalMileage < currentMileage && petrol != '' && place!= '' && price!='' &&petrol != null && place!= null && price!=null ){
      calculate = ((currentMileage - totalMileage) / petrol).toFixed(2);
      details.mileage =  "Mileage per Liter:" + calculate + " /lt" ;
      calculatePrice = (price / (currentMileage - totalMileage)).toFixed(2);
      details.totalPrice = "Price per K/m:" + calculatePrice + " /Km" ;
      var average = (petrol/distance).toFixed(2) ; 
      // var arrowMe;
      console.log(average)
      var mileageDetails = [] ;
      var mileageData = {
        distance : distance,   
        price : price,
        petrol : petrol,
        place : place,
        calculate : calculate,
        average : average,
        date : this.currentDate
      };
      var data = JSON.parse(localStorage.getItem('mileageDetails'));
			if(!data){
        mileageDetails.push(mileageData);
        localStorage.setItem('mileageDetails', JSON.stringify(mileageDetails));
			}
			else{
				data.push(mileageData);
				localStorage.setItem('mileageDetails', JSON.stringify(data));
      }
      const toast= this.toastctrl.create({
        message:'Calulated',
        duration: 3000,
        position: 'bottom'
      });
      // toast.present();
      this.viewCtrl.dismiss({select:'data'});
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Ivalid Input',
        message: 'Please check all your inputs!',
        buttons: ['Ok']
      });
      alert.present()
    }
  }
  presentPrompt(details) {
    let alert = this.alertCtrl.create({
      title: 'Mileage Details',
      inputs: [
        {
          name: 'totalMileage',
          placeholder: 'Enter Total Milage',
          
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            details.totalMileage = data.totalMileage;            
            console.log(data);         
          }
        }
      ]
    });
    alert.present();
  } 
  cancel(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MileagePage');
  }

}
