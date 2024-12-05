# Assignment: React Developer

Imagine a headless webshop where customers can browse products. The goal of this assignment is to evaluate your skills in React, including logic implementation, URL state management, data fetching, and styling.

You are tasked with creating a **Product Listing Page** for the webshop. This page should display a list of products and support filtering and pagination. The assignment is designed to assess your ability to handle state, manage data fetching, and create a clean and responsive UI.

## Requirements

### 1. Product Listing Page

Create a product listing page that displays a grid of products. Each product should show:

- Image
- Name
- Price
- Expected delivery date

The expected delivery date (ATP) should be formatted using the following logic:

- If ATP <= today + 4 days: `In 1 week`
- If ATP > today + 4 days and ATP <= today + 11 days: `In 2 weeks`
- If ATP > today + 11 days and ATP <= today + 18 days: `In 3 weeks`
- If ATP > today + 18 days and ATP <= today + 27 days: `In 4 weeks`
- If ATP > today + 27 days and ATP <= today + 60 days: `In 2 months`
- If ATP > today + 60 days and ATP <= today + 90 days: `In 3 months`
- If ATP > today + 90 days: `After 6 months`
- If ATP = unknown: `After 6 months`

### 2. Features

- **Filtering**: Allow users to filter products by:
  - Number of drawers
  - Max load
- **Pagination**: Display 10 products per page and provide navigation to move between pages.
- **URL State Management**: Reflect the current filters, sorting, and pagination in the URL, so the state is shareable via a link.
- **Data Fetching**: Simulate data fetching from an API using the example data in `toolboxes.json`

### 3. Tech stack

React and TypeScript.

## 4. Deliverables

A ZIP file via email with instructions on how to set up and run your application locally.

## 5. Evaluation Criteria

1. **Functionality**: Does the application meet the requirements?
2. **Code Quality**: Is the code clean, modular, and well-documented?
3. **State Management**: How effectively is state managed, particularly with URL state and data fetching?
4. **Styling and Responsiveness**: Is the UI clean and responsive on different devices?

## 6. Time Expectation

The assignment should take around 4-6 hours to complete. It’s fine to submit a partial implementation if you run out of time—just make sure to explain your approach and next steps.

We’re excited to see your work! Good luck!
