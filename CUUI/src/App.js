import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Detail from "./components/DetailPage/Detail";
import Account from "./components/Account/Account";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ProductLace from "./components/Product/ProductLace";
import ProductLatkan from "./components/Product/ProductLatkan";
import ProductPatch from "./components/Product/ProductPatch"
import ProductBlouse from "./components/Product/ProductBlouse";
import Sleeve from "./components/Sleeve/Sleeve";
import Address from "./components/Address/Address";
import Checkout from "./components/Checkout/Checkout";
import CHome from "./components/Chome/Home";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <CHome />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/account" exact>
          <Account />
        </Route>
        <Route path="/wishlist" exact>
          <Wishlist />
        </Route>
        <Route path="/bag" exact>
          <Cart />
        </Route>
        <Route path="/blouse" exact>
          <ProductBlouse head="Blouse's" value="blouse" image="NeckDesigns" />
        </Route>
        <Route path="/lace" exact>
          <ProductLace head="Lace's" value="lace" image="Lace" />
        </Route>
        <Route path="/latkan" exact>
          <ProductLatkan head="Latkan's" value="latkan" image="Latkan" />
        </Route>
        <Route path="/patches" exact>
          <ProductPatch head="Patches's" value="patches" image="Patches" />
        </Route>
        <Route path="/detail/:type/:ID">
          <Detail />
        </Route>
        <Route path="/sleeve" exact>
          <Sleeve />
        </Route>
        <Route path="/address" exact>
          <Address />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
