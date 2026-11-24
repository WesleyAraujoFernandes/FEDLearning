import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full'
  },
  {
    path: 'pages/login',
    component: Login
  },
  {
    path: 'pages/home',
    component: Home
  },
  {
    path: 'pages/register',
    component: Register
  },
  {
    path: 'pages/about',
    component: About
  },
  {
    path: 'pages/contact',
    component: Contact
  },
  {
    path: 'pages/products',
    component: Products
  },
  {
    path: 'pages/product-details/:id',
    component: ProductDetails
  },
  {
    path: '**',
    component: PageNotFound
  },
];
