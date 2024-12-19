# Wakefit Furniture E-commerce -ANGULAR Frontend

This is the frontend of the Wakefit Furniture E-commerce project, developed using Angular. It provides users with the ability to explore furniture products, register, log in, view profiles, and manage their shopping experience.

## Screenshots
![image](https://github.com/user-attachments/assets/a1af6d8d-c1b8-41b2-9007-40e1c53edf7f)

Here are the image source links from the assets folder:

- assets/Screenshot%202024-12-19%20192506.png  
- assets/Screenshot%202024-12-19%20192523.png  
- assets/Screenshot%202024-12-19%20192608.png  
- assets/Screenshot%202024-12-19%20192632.png  
- assets/Screenshot%202024-12-19%20192654.png  
- assets/Screenshot%202024-12-19%20192708.png  
- assets/Screenshot%202024-12-19%20192725.png  
- assets/Screenshot%202024-12-19%20192811.png  
- assets/Screenshot%202024-12-19%20192830.png  
- assets/Screenshot%202024-12-19%20192852.png  
- assets/Screenshot%202024-12-19%20192923.png  
- assets/Screenshot%202024-12-19%20192947.png  
- assets/Screenshot%202024-12-19%20193001.png  
- assets/Screenshot%202024-12-19%20193020.png  
- assets/Screenshot%202024-12-19%20193046.png  
- assets/Screenshot%202024-12-19%20193128.png  
- assets/Screenshot%202024-12-19%20193154.png  
- assets/Screenshot%202024-12-19%20193219.png  
- assets/Screenshot%202024-12-19%20193245.png  
- assets/Screenshot%202024-12-19%20193332.png  
- assets/Screenshot%202024-12-19%20193352.png  
- assets/Screenshot%202024-12-19%20193415.png  
- assets/Screenshot%202024-12-19%20193526.png  
- assets/Screenshot%202024-12-19%20193542.png  
- assets/Screenshot%202024-12-19%20193606.png  
- assets/Screenshot%202024-12-19%20193613.png  
- assets/Screenshot%202024-12-19%20193646.png  
- assets/Screenshot%202024-12-19%20193701.png  
- assets/Screenshot%202024-12-19%20193805.png  
- assets/Screenshot%202024-12-19%20193825.png  
- assets/Screenshot%202024-12-19%20193904.png  
- assets/Screenshot%202024-12-19%20193919.png  
- assets/Screenshot%202024-12-19%20193927.png  
- assets/Screenshot%202024-12-19%20193949.png  
- assets/Screenshot%202024-12-19%20193958.png  
- assets/Screenshot%202024-12-19%20194024.png  
- assets/Screenshot%202024-12-19%20194110.png  
- assets/Screenshot%202024-12-19%20194128.png  
- assets/Screenshot%202024-12-19%20194143.png  
- assets/Screenshot%202024-12-19%20194214.png  
- assets/Screenshot%202024-12-19%20194223.png  
- assets/Screenshot%202024-12-19%20194234.png  
- assets/Screenshot%202024-12-19%20194255.png  
- assets/Screenshot%202024-12-19%20194311.png  
- assets/Screenshot%202024-12-19%20194345.png  
- assets/Screenshot%202024-12-19%20194411.png  
- assets/Screenshot%202024-12-19%20194424.png  
- assets/Screenshot%202024-12-19%20194437.png  
- assets/Screenshot%202024-12-19%20194621.png  
- assets/Screenshot%202024-12-19%20194739.png  
- assets/Screenshot%202024-12-19%20194752.png  
- assets/Screenshot%202024-12-19%20194809.png  
- assets/Screenshot%202024-12-19%20194827.png  
- assets/Screenshot%202024-12-19%20194845.png  
- assets/Screenshot%202024-12-19%20194926.png  

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
