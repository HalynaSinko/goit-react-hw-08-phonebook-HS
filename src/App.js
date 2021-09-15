import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";
import path from "./routesPath";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authOperations } from "./redux/auth";

const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view"*/)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView.js" /* webpackChunkName: "register-view"*/)
);
const LoginView = lazy(() =>
  import("./views/LoginView.js" /* webpackChunkName: "login-view"*/)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView.js" /* webpackChunkName: "contacts-view"*/)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path={path.homeView}>
            <HomeView />
          </PublicRoute>
          <PublicRoute path={path.registerView} restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute
            path={path.loginView}
            restricted
            redirectTo={path.contactsView}
          >
            <LoginView />
          </PublicRoute>
          <PrivateRoute path={path.contactsView} redirectTo={path.loginView}>
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
