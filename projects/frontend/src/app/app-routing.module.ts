import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shopping',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren:  () => import(`cart-firebase`).then(m => m.FirebaseModule),
    data: {
      reuseRoute: true,
    },
  },
  {
    path: 'shopping',
    loadChildren: './shopping/shopping.module#ShoppingModule',
    data: {
      reuseRoute: true,
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
