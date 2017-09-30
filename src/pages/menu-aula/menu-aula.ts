import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
/**
 * Generated class for the MenuAulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-aula',
  templateUrl: 'menu-aula.html',
})
export class MenuAulaPage {
  tipoUser:string;
  usuario:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.usuario=navParams.get("usuario");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuAulaPage');
  }

  EntrarChat()
  {

    if(this.tipoUser=="4A")
      {
        this.navCtrl.push(ChatPage,{curso:"A",usuario:this.usuario});
      }
    else if(this.tipoUser=="4B")
      {
        this.navCtrl.push(ChatPage,{curso:"B",usuario:this.usuario});
      }
      else
        {alert("debe seleccionar un aula");}
  }
}
