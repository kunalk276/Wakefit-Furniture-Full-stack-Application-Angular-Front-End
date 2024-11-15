# Wakefit Furniture E-commerce -ANGULAR Frontend

This is the frontend of the Wakefit Furniture E-commerce project, developed using Angular. It provides users with the ability to explore furniture products, register, log in, view profiles, and manage their shopping experience.

## Screenshots
![image](https://github.com/user-attachments/assets/a1af6d8d-c1b8-41b2-9007-40e1c53edf7f)

![Homepage]((https://github.com/user-attachments/assets/a1af6d8d-c1b8-41b2-9007-40e1c53edf7f))
*Homepage showcasing featured products and categories.*

![Product Listing](path_to_your_screenshot/product_listing.png)
*Product listing with details and filtering options.*

![User Profile](path_to_your_screenshot/user_profile.png)
*User profile management page.*

![Shopping Cart](path_to_your_screenshot/shopping_cart.png)
*Shopping cart displaying added items and total calculation.*

## Features

- **User Management**
  - **Registration and Login**: Users can register and log in to the platform using their credentials.
  - **Profile Management**: Users can update their profile details such as username, email, and mobile number.
  - **Password Validation**: Strong password validation including checks for length, uppercase, lowercase, numbers, and special characters.

- **Customer Management**
  - **Customer Profile**: Customers can view and update their personal information.
  - **Order History**: Customers can view past orders and the status of current orders.

- **Product Catalog**
  - **Product Listing**: Displays furniture products with details such as name, description, price, and stock quantity.
  - **Product Filtering**: Allows filtering products by categories, helping users find items based on their preferences.

- **Category Management**
  - **Product Categories**: Organizes products into different categories for easy navigation, including options like chairs, tables, beds, etc.
  - **Category Filtering**: Users can filter products by selecting a category from the product listing page.

- **Shopping Cart**
  - **Add to Cart**: Customers can add products to their shopping cart from the product listing.
  - **Cart Management**: Customers can update the quantity or remove products from the cart.
  - **Total Calculation**: The cart dynamically calculates the total price of all items.

- **Order Management**
  - **Place Orders**: Customers can review their cart and place orders.
  - **Order Tracking**: Users can track the status of their orders from the order history page.

- **Address Management**
  - **Add Address**: Users can add and save multiple shipping addresses.
  - **Update and Delete**: Allows users to update or remove saved addresses.
  - **Select Address at Checkout**: Users can select a saved address during the checkout process.

- **Payment Integration**
  - **Simulated Payment Gateway**: Supports payment via simulated gateways, including credit/debit cards and wallets.
  - **Order Completion**: Completes the order once payment is confirmed.

- **Feedback and Reviews**
  - **Leave Feedback**: Customers can leave feedback or reviews for products they have purchased.
  - **Display Reviews**: Reviews are displayed alongside products for other users to view.


## Installation

1. **Clone the repository**:
   git clone https://github.com/kunalk276/Wakefit-Furniture-Full-stack-Application--Front-End-.git

2. **Navigate to the project directory**:
cd Wakefit-Furniture-Full-stack-Application--Front-End-

3. **Install the dependencies**:
npm install

4. **Run the application**:
ng serve

5. **Access the application**:
Open your web browser and navigate to http://localhost:4200 to view the application.

## Technologies Used

Angular (v15+)
TypeScript
HTML5 & CSS3
Bootstrap for responsive design

## Setup Instructions
**Environment Setup**: Make sure you have the latest version of Node.js and Angular CLI installed.

**Run in Development Mode**: Use the ng serve command to start the development server and view the project in a local browser.

**Code Customization**: Modify components, services, and styles under the src/app folder as per the project requirements.

## Key Components

**HomeComponent**: Displays the homepage with featured products and categories.
**ProductListComponent**: Lists products available for purchase.
**UserProfileComponent**: Displays user details and allows profile updates.
**CreateUserComponent**: Manages user registration and form validation.

## License
This project is licensed under the MIT License.
