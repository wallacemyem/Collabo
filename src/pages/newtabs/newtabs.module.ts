import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtabsPage } from './newtabs';

@NgModule({
  declarations: [
    NewtabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewtabsPage),
  ]
})
export class NewtabsPageModule {}
