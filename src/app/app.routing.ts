import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  // { path: 'mon-compte', component: LoginFormComponent },
  // { path: 'nouveau-compte', component: RegisterFormComponent },
  // { path: 'parametres', component: AdminComponent},
  // { path: 'produits', component: SearchComponent},
  // { path: 'panier', component: CartComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
