import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { AuthComponent } from './components/pages/client/auth/auth/auth.component';
import { CartComponent } from './components/pages/client/cart/cart.component';
import { CheckoutComponent } from './components/pages/client/checkout/checkout.component';
import { FavoritesComponent } from './components/pages/client/favorites/favorites.component';
import { HomeComponent } from './components/pages/client/home/home.component';
import { MyOrdersComponent } from './components/pages/client/my-orders/my-orders.component';
import { ProductComponent } from './components/pages/client/product/product.component';
import { ProductsComponent } from './components/pages/client/products/products.component';
import { ProductsComponent as ProducsAdminComponent } from './components/pages/admin/products/products/products.component';
import { AuthGuard } from './guard/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'whishlist', component: FavoritesComponent, canActivate: [AuthGuard]},
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'admin', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'admin/products', component: ProducsAdminComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
