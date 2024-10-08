import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageProductComponent } from './admin/manage-products/manage-products.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageCartsComponent } from './admin/manage-carts/manage-carts.component';
import { ManageAddressesComponent } from './admin/manage-addresses/manage-addresses.component';
import { ManageFeedbacksComponent } from './admin/manage-feedbacks/manage-feedbacks.component';
import { ManagePaymentsComponent } from './admin/manage-payments/manage-payments.component';
import { CartComponent } from './cart/cart.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductFeedbackViewComponent } from './product-feedback-view/product-feedback-view.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  // User routes
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product-details/:productId', component: ProductDetailsComponent },
  { path: 'viewproduct', component: ViewProductComponent },
  { path: 'category-products/:categoryId', component: ViewProductComponent },
  { path: 'update-product/:productId', component: UpdateProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'product-details/:productId', component: ProductDetailsComponent },
  { path: 'product-feedback-view/:productId', component: ProductFeedbackViewComponent },

  { path: 'feedbacks', component: FeedbackListComponent },
  { path: 'create-feedback', component: CreateFeedbackComponent },
  { path: 'create-feedback/:productId', component: CreateFeedbackComponent },
  { path: 'feedback/create/:productId', component: CreateFeedbackComponent },

  { path: 'update-feedback/:feedbackId', component: UpdateFeedbackComponent },
  { path: 'feedback-details/:feedbackId', component: FeedbackDetailsComponent },
  { path: 'addresses', component: AddressListComponent },
  { path: 'create-address', component: CreateAddressComponent },
  { path: 'update-address/:addressId', component: UpdateAddressComponent },
  { path: 'address-details/:addressId', component: AddressDetailsComponent },
  { path: 'users', component: UserListComponent },
  { path: 'profile/:userId', component: UserProfileComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:userId', component: UpdateUserComponent },
  { path: 'user-details/:userId', component: UserDetailsComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: 'update-category/:categoryId', component: UpdateCategoryComponent },
  { path: 'category-details/:categoryId', component: CategoryDetailsComponent },
  { path: 'viewcategories', component: ViewCategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'contact-us', component: ContactUsComponent },


  // Admin routes
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage-products', component: ManageProductComponent },
  { path: 'manage-categories', component: ManageCategoriesComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
  { path: 'manage-carts', component: ManageCartsComponent },
  { path: 'manage-addresses', component: ManageAddressesComponent },
  { path: 'manage-feedbacks', component: ManageFeedbacksComponent },
  { path: 'manage-payments', component: ManagePaymentsComponent },
  
  
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  
  
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
