# FarmCart Mobile Version

FarmCart is app that supports fresh farm products delivery. It's supported 

## Updated Version (06/22)

run by 

```bash
npm install/yarn install
```
For dependecy installations. 

```bash
npm start/expo start
```
To start runing the app on localhost.

Then run 
```
cd backend
nodemon server
```
To start the backend server of the app.

## Quick Guide Coding Structure 

### MainNavigator

MainNavigator supoorts multiple screen navigation. 
```
Welcome
```
Page Navigates into signin and signup routes.

```
SignIn
```
Page for users who already has an account. 

```
SignUp
```
Page for new users. 

```
Product
```
A page shows up the product information. Including price, quantity

```
HomeNavigator
```
Supports four other routes, details seen in below.

```
Order
```
Order page(developing).

### HomeNavigator
```
Home
```
The first route for home navigator. Include product categories, product recommendations and local farmer recommendations. 

```
Search
```
Search enable users to seach by product name.

```
Cart
```
Cart enable users to add product into their cart.

```
Profile
```
User settings.

## Backend model

Currently supports 
/signup, /login, /addfarmproducts, /deletefarmproducts, /updatefarmproducts



