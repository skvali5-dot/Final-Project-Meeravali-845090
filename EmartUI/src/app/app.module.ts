import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { BlockOrUnblockSellerComponent } from './Admin/block-or-unblock-seller/block-or-unblock-seller.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { BlockOrUnblockBuyerComponent } from './Admin/block-or-unblock-buyer/block-or-unblock-buyer.component';
import { HomeComponent } from './Account/home/home.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { ViewSubCategotyComponent } from './Admin/view-sub-categoty/view-sub-categoty.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    BuyProductComponent,
    ViewProfileComponent,
    SellerLandingPageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    BlockOrUnblockSellerComponent,
    BlockOrUnblockBuyerComponent,
    LoginComponent,
    RegisterBuyerComponent,
    RegisterSellerComponent,
    AdminComponent,
    HomeComponent,
    SellerProfileComponent,
    ViewCategoryComponent,
    ViewSubCategotyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
