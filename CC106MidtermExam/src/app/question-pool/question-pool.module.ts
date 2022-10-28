import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionPoolPageRoutingModule } from './question-pool-routing.module';

import { QuestionPoolPage } from './question-pool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionPoolPageRoutingModule
  ],
  declarations: [QuestionPoolPage]
})
export class QuestionPoolPageModule {}
