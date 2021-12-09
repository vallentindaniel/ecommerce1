import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

///////////////////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/client/home/home.component';
import { ProductsComponent } from './components/pages/client/products/products.component';
import { ProductComponent } from './components/pages/client/product/product.component';
import { CartComponent } from './components/pages/client/cart/cart.component';
import { CheckoutComponent } from './components/pages/client/checkout/checkout.component';
import { ThanksComponent } from './components/pages/client/thanks/thanks.component';
import { MyOrdersComponent } from './components/pages/client/my-orders/my-orders.component';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { AddProductComponent } from './components/pages/admin/products/add-product/add-product.component';
import { EditProductComponent } from './components/pages/admin/products/edit-product/edit-product.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
///////////////////////////////////////////////////////////////////////////////////////////


////////////Angular Material///////
import {LayoutModule} from '@angular/cdk/layout'; // to set automaticaly layout for components
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
////////////////Angular Firebase Module////////////////////
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
/////////////////////////////////////////////////////////////////////////////////

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/pages/client/auth/login/login.component';
import { RegisterComponent } from './components/pages/client/auth/register/register.component';
import { AuthComponent } from './components/pages/client/auth/auth/auth.component';
import { FavoritesComponent } from './components/pages/client/favorites/favorites.component';
import { CarouselComponent } from './components/util/carousel/carousel.component';
import { CardsListComponent } from './components/util/cards-list/cards-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabFilterProductsComponent } from './components/util/tab-filter-products/tab-filter-products.component';
import { AdsImagesComponent } from './components/util/ads-images/ads-images.component';
import { FilterPipe } from './pipes/filter/filter.pipe';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ThanksComponent,
    MyOrdersComponent,
    DashboardComponent,
    AddProductComponent,
    EditProductComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    FavoritesComponent,
    CarouselComponent,
    CardsListComponent,
    TabFilterProductsComponent,
    AdsImagesComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /////////////Angular Forms/////////////////////
    ReactiveFormsModule,
    ///////////////For design////////////////////
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    ////////////Angular Material/////////////////
    MatGridListModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    //////////////Angular Firebase Module///////////////
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
