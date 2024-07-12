import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../app/pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('../app/pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('../app/pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'profile',
    loadComponent: () => import('../app/pages/profile/profile.component').then(m => m.ProfileComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-listing',
    loadComponent: () => import('../app/pages/product-listing/product-listing.component').then(m => m.ProductListingComponent),
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('../app/pages/product-details/product-details.component').then(m => m.ProductDetailsComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


