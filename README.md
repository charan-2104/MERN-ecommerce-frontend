# MERN E-Commerce Frontend

This is the frontend for a MERN stack E-commerce application. The frontend is built using React, Redux, and TypeScript. It interacts with the backend to provide a seamless user experience.

## Tech Stack

- **React**
- **Redux**
- **TypeScript**
- **Tailwind CSS**
- **Firebase**
- **Stripe**

## Features

- User authentication and authorization
- Product catalog and details
- Shopping cart management
- Order management
- Payment processing with Stripe
- Responsive design

## Getting Started

### Prerequisites

- Node.js
- Firebase account
- Stripe account

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/charan-2104/MERN-ecommerce-frontend.git
   cd MERN-ecommerce-frontend

   
2. Install dependencies:
     `npm install`
   

4. Create a `.env` file in the root directory and add the following environment variables:

	VITE_FIREBASE_KEY=  `from firebase`

	VITE_AUTH_DOMAIN=  `from firebase`

	VITE_PROJECT_ID=`from firebase`

	VITE_STORAGE_BUCKET=`from firebase`

	VITE_MESSAGING_SENDER_ID=`from firebase`

	VITE_APP_ID=`from firebase`

	VITE_SERVER=`Your Backend Server URl`

   VITE_STRIPE_KEY=`Stripe Publishable Key`
   
  

5.	Run the server:

		`npm run dev`
