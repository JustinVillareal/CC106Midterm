import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then( m => m.PlayPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'leaderboards',
    loadChildren: () => import('./leaderboards/leaderboards.module').then( m => m.LeaderboardsPageModule)
  },
  {
    path: 'userprogress',
    loadChildren: () => import('./userprogress/userprogress.module').then( m => m.UserprogressPageModule)
  },
  {
    path: 'question-pool',
    loadChildren: () => import('./question-pool/question-pool.module').then( m => m.QuestionPoolPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'socialmedia',
    loadChildren: () => import('./socialmedia/socialmedia.module').then( m => m.SocialmediaPageModule)
  },  {
    path: 'menu-tab',
    loadChildren: () => import('./menu-tab/menu-tab.module').then( m => m.MenuTabPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
