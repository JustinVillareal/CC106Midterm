import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserprogressPage } from './userprogress.page';

const routes: Routes = [
  {
    path: '',
    component: UserprogressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserprogressPageRoutingModule {}
