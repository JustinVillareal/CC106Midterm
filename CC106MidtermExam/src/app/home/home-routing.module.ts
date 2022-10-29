import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'account',
    loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'leaderboards',
    loadChildren: () => import('../leaderboards/leaderboards.module').then( m => m.LeaderboardsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
