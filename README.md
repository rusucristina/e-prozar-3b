# E-Prozar Sprint 3

## Story

You and a friend had the idea to create a website for the local grocery store down the street after you heard them considering to try out this "online thing where the people are all going these days".
In order to convince the owners to choose you for creating their site, you need to present a demo to them with a group of random products.
Coffee mug full, coding mode on, let's create E-Prozar !

## What are you going to learn?

- render the objects from a list with react in the DOM
- working with object properties
- extracting code in smaller components
- sending data from parent to child components
- modifying data from child to parent component using callbacks
- react basic syntax usage

## Tasks

1. Extract the code from the previous sprint responsible for filtering the products into the `Filters` component
    - When clicking the select by category input there are `21` items to choose from
    - When selecting the `Garden` category the only products displayed are `Incredible Rubber Mouse`, `Intelligent Granite Car` and `Licensed Cotton Bacon`
    - There is a reset all filters button which clears the values entered in all the filters and shows all the elements
    - When the user scrolls the page the section with filters always remains visible (is sticky)

2. Extract the code for filtering the products by name in the `Filters component`
    - Setting the category `Garden` and the name `incredible` the only product which is displayed is `Incredible Rubber Mouse`
    - The text is case `insensitive` so typing `FISH` will display `Practical Plastic Fish`, `Gorgeous Plastic Fish`, `Ergonomic Fresh Fish` and `Incredible Plastic Fish`

3. Extract the code for filtering the products by minimum price in the `Filters` component
    - Setting the category `Garden` the name `in` and the minimum price `200` the only product which is displayed is `Intelligent Granite Car`

4. Extract the code for displaying the filtered products in the `ProductList` component
    - Clicking the `Add to cart` button changes the button's name to `Remove from Cart`
    - Clicking the `Remove from cart` button changes the button's name to `Add to Cart`
    - When clicking the `Add to cart` button for the `Incredible Rubber Mouse` and selecting the category `Garden` the product `Incredible Rubber Mouse` still has the button with the label `Remove from cart`

5. Extract the code which displays the total number of bought components in the `Filters` component
    - Clicking the `Add to cart` button for a single product changes the shopping cart's total displayed items from 0 to 1
    - Clicking the `Remove from cart` button for a product decreases by 1 the total number of added to cart items
    - Clicking the `Add to cart` button for a 2 products changes the shopping cart's total displayed items from 1 to 2

6. Add an input box and a button to the `Coupon` component which reduces the price of all the products based on the entered coupon
    - When the user enters `10` in the input boxes, presses the `apply coupon` button the prices of all the products are reduced by 10%
    - When the user enters `ten` in the input boxes, presses the `apply coupon` button the prices of all the products remain the same and an error message message with the text `invalid coupon`
    - When the user enters an invalid coupon the text `invalid coupon` appears and disappears after 2 seconds

7. When the user clicks on the language flags the language for the whole page is updated accordingly
    - The input box's placeholder where the user filters products by name is updated to the selected language
    - The reset all filters button label is updated to the selected language
    - The text in the footer of the page is updated to the selected language
    - The text showing the total items added in the card is updated to the selected language
    - The label for the button which toggles a product status of bought/unbought is updated to the selected language
    - The placeholder for the input box where the user enters the coupon code is updated to the selected language
    - The label for the button to apply the entered coupon is updated to the selected language
    - The text for which describes the random product of the day which is on offer is updated to the selected language

## General requirements

None

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`
- to reduce the amount of CSS used, you can import the bootstrap library

## Background materials

- <i class="far fa-exclamation"></i> [Functional Components](https://www.robinwieruch.de/react-function-component#react-stateless-function-component)
- <i class="far fa-exclamation"></i> [SetTimeout in react (read the gotchas part)](https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks)
- <i class="far fa-book-open"></i> [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
- <i class="far fa-book-open"></i> [Display lists in React](https://scotch.io/starters/react/handling-lists-in-react-jsx)
- <i class="far fa-book-open"></i> [Importing css files to react](https://create-react-app.dev/docs/adding-a-stylesheet/)
- <i class="far fa-book-open"></i> [Adding css styles to react](https://www.w3schools.com/react/react_css.asp)
- <i class="far fa-book-open"></i> [Debugging a React project](https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/)
- <i class="far fa-book-open"></i> [JS Date functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- <i class="far fa-book-open"></i> [JS String functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
