import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { BlockOrUnblockBuyerComponent } from './Admin/block-or-unblock-buyer/block-or-unblock-buyer.component';
import { BlockOrUnblockSellerComponent } from './Admin/block-or-unblock-seller/block-or-unblock-seller.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Account/home/home.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { ViewSubCategotyComponent } from './Admin/view-sub-categoty/view-sub-categoty.component';

const routes: Routes = [
    {path:'admin',component:AdminComponent},
    {path:'add-sub-category',component:AddSubCategoryComponent},
    {path:'block-or-unblock-buyer',component:BlockOrUnblockBuyerComponent},
    {path:'block-or-unblock-seller',component:BlockOrUnblockSellerComponent},
    {path:'daily-reports',component:DailyReportsComponent},
    {path:'add-category',component:AddCategoryComponent},
    {path:'view-category',component:ViewCategoryComponent},
    {path:'view-sub-category',component:ViewSubCategotyComponent},
    {path:'app',component:AppComponent},
    {path:'buyer-landing-page',component:BuyerLandingPageComponent},
    {path:'buy-product',component:BuyProductComponent},
    {path:'purchase-history',component:PurchaseHistoryComponent},
    {path:'search',component:SearchComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'view-profile',component:ViewProfileComponent},
  {path:'seller-landing-page',component:SellerLandingPageComponent},
    {path:'add-items',component:AddItemsComponent},
    {path:'view-items',component:ViewItemsComponent},
    {path:'view-reports',component:ViewReportsComponent},
    {path:'seller-profile',component:SellerProfileComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register-buyer',component:RegisterBuyerComponent},
  {path:'register-seller',component:RegisterSellerComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
