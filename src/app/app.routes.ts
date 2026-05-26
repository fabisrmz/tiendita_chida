import { Routes } from '@angular/router';
import { Products } from './pages/home/products/products';
import { Home } from './pages/home/home';


export const routes: Routes = [
{
  component: Products,
},

   {
    path: '',
    component: Home
  }
  
];
