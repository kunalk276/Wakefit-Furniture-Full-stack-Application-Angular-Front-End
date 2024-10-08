// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import components
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { SearchComponent } from './search/search.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListComponent } from './category-list/category-list.component';

// Admin module components
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageCartsComponent } from './admin/manage-carts/manage-carts.component';
import { ManageAddressesComponent } from './admin/manage-addresses/manage-addresses.component';
import { ManageFeedbacksComponent } from './admin/manage-feedbacks/manage-feedbacks.component';
import { ManagePaymentsComponent } from './admin/manage-payments/manage-payments.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageProductComponent } from './admin/manage-products/manage-products.component';

// Import services
import { AddressService } from './address.service';
import { FeedbackService } from './feedback.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { CartService } from './cart.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CartComponent } from './cart/cart.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductFeedbackViewComponent } from './product-feedback-view/product-feedback-view.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    CreateProductComponent,
    CreateFeedbackComponent,
    FeedbackListComponent,
    UpdateFeedbackComponent,
    FeedbackDetailsComponent,
    CreateAddressComponent,
    UpdateAddressComponent,
    AddressDetailsComponent,
    AddressListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroCarouselComponent,
    SearchComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    // Admin components
    ManageCategoriesComponent,
    ManageOrdersComponent,
    ManageCartsComponent,
    ManageAddressesComponent,
    ManageFeedbacksComponent,
    ManagePaymentsComponent,
    DashboardComponent,
    ManageProductComponent,
    CartComponent,
    ViewCategoriesComponent,
    ViewProductComponent,
    UserProfileComponent,
    SearchResultsComponent,
    ViewFeedbackComponent,
    CheckoutComponent,
    ProductFeedbackViewComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]) 
  ],
  providers: [
    AddressService, 
    FeedbackService,
    ProductService,
    CategoryService,
    CartService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }