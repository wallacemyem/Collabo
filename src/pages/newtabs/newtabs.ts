import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the NewtabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtabs',
  templateUrl: 'newtabs.html'
})
export class NewtabsPage {

  homeRoot = 'HomePage'
  taskRoot = 'TaskPage'
  notifificationsRoot = 'NotifificationsPage'
  accountRoot = 'AccountPage'


  constructor(public navCtrl: NavController) {}

}
