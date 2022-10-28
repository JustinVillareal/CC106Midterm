import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserprogressPageRoutingModule } from './userprogress-routing.module';

import { UserprogressPage } from './userprogress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserprogressPageRoutingModule
  ],
  declarations: [UserprogressPage]
})
export class UserprogressPageModule {}
