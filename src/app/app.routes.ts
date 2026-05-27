import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register/register';

export const routes: Routes = [
   {
    path: '',
    component: Register,
  },
 {
  path: 'products',
  component: Products
},{
  path: 'home',
  component: Home
}

];
