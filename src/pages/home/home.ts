import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database"; 
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { LoginPage } from '../../pages/login/login';
import { AuthService } from '../../auth.service';
import { NavService } from '../../nav.service';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit, OnDestroy {
  usuario: string;
  aula: string;
  lista: FirebaseListObservable<any>;
  listaDB: Array<string>;

  constructor(private ns: NavService,
     public toastCtrl: ToastController,
      public navCtrl: NavController, 
      public navParams: NavParams,
      private authAf : AngularFireAuth, 
      public authService : AuthService,
      public af: AngularFireDatabase,
      public alertCtrl: AlertController
    ) {
      this.usuario = navParams.get("userLogged");
  }
  public ngAfterViewInit(){
  }

  public ngOnDestroy(){
  }
  
  logout(){
    const alert = this.alertCtrl.create({
      title: 'Atención!',
      message: 'Seguro desea cerrar sesión?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.authService.isLogged$.next(false);
            this.authAf.auth.signOut();
            this.ns.getNavRoot().setRoot(LoginPage);    
          }
        },
        {
          text: 'No'
        }
      ]
    });
    alert.present();
  }

  showToastError(message:string){
    this.toastCtrl.create({
      message: message,
      duration: 1800,
      cssClass:"ErrorToast"
    }).present();
  }

  showToastOk(message:string){
    this.toastCtrl.create({
      message: message,
      duration: 1800,
      cssClass:"OkToast"
    }).present();
  }

  EntrarChat()
  {

    if(this.aula=="4A")
      {
        this.navCtrl.push(ChatPage,{curso:"A",usuario:this.usuario});
      }
    else if(this.aula=="4B")
      {
        this.navCtrl.push(ChatPage,{curso:"B",usuario:this.usuario});
      }
      else
        {alert("debe seleccionar un aula");}
  }
  
}
