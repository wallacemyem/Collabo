import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalPage } from './cal';

@NgModule({
  declarations: [
    CalPage,
  ],
  imports: [
    IonicPageModule.forChild(CalPage),
  ],
})
export class CalPageModule {}
