import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionPoolPage } from './question-pool.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionPoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionPoolPageRoutingModule {}
