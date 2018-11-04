import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastController }from 'ionic-angular';
// import { LoginPage } from '../login/login';
import { DashboardPage } from '../../pages/dashboard/dashboard';



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  constructor(public navCtrl: NavController,public toastctrl:ToastController ,public formBuilder:FormBuilder, public navParams: NavParams) {
    
  }
 
  signup(datai){
    console.log(datai)
    var userDetails=[];
    var userData = {
      userName : datai.userName,
    };
    var data = JSON.parse(localStorage.getItem('userDetails'));
			if(!data){
        userDetails.push(userData);
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
			}
			else{
				data.push(userData);
				localStorage.setItem('userDetails', JSON.stringify(data));
      }
      const toast= this.toastctrl.create({
        message:'Welcome '+ datai ,
        duration: 3000,
        position: 'top',
      });
      toast.present();
      localStorage.setItem('currentUser',JSON.stringify(datai));
    this.navCtrl.push(DashboardPage,{userName:datai});
  }
  ionViewDidLoad() {
 	console.log("Signup Page");
}
}