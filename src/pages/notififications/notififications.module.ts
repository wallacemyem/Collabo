import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotifificationsPage } from './notififications';

@NgModule({
  declarations: [
    NotifificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotifificationsPage),
  ],
})
export class NotifificationsPageModule {}
