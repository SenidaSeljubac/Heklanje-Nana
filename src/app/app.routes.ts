import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { PatternsComponent } from './patterns/patterns.component';

export const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "categories", component: CategoriesComponent },
    { path: "about", component: AboutMeComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'place-order', component: PlaceOrderComponent },
    { path: 'patterns', component: PatternsComponent},
    { path: 'contact', component: ContactComponent},
    { path: "**", component: HomePageComponent }];
