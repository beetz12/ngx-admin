import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { NgxLoginComponent } from './login/login.component';

// export const routes: Routes = [
//         // .. some other app routs
//         {
//             path: 'auth',
//             loadChildren: () => import('./auth.module').then(m => m.NgxAuthModule),
//         },
//     ];

export const routes: Routes = [
    {
      path: '',
      component: NbAuthComponent,
      children: [
        {
            path: 'login',
            component: NgxLoginComponent, // <---
        },
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}