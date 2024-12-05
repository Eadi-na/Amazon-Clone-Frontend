

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Order from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from "./Components/ProtrctedRoute/ProtectedRoute";

const stripePromise = loadStripe("pk_test_51OjV3jAv0AdTtAyFWVR1pCPopaHUHODRURGAcyZ18TfTLb9rxxSCsVHC3n3LxCuUGh5NbvcWO5OPHzfPiHN738Rx00xjgLz7qV");

function Routing() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/payments" 
          element={
            <ProtectedRoute 
            msg={"you must log in to pay"} 
            redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
              <Payment />
          </Elements >
            </ProtectedRoute>
          } />
          <Route path="/orders" 
          element={
            <ProtectedRoute
            msg={"you must log in to access your orders"} 
            redirect={"/orders"}
             >
             <Order/>
            </ProtectedRoute>
         
          }
           />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;