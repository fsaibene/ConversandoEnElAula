import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  list: FirebaseListObservable<any>;
  chatBox:string;
  username:string;
  curso:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,db:AngularFireDatabase) {
    this.curso=navParams.get("curso");
    this.username=navParams.get("usuario");
    if(this.curso=="A"){
      this.list=db.list('/Mensaje4A');
    }else{
      this.list=db.list('/Mensaje4B');
    }
  }

  Push() {
  this.list.push({
    usuario:this.username,
    mensaje:this.chatBox});
    this.chatBox="";
  }
  backToHome(){
    this.navCtrl.setRoot(HomePage,{userLogged: this.username})
  }
}