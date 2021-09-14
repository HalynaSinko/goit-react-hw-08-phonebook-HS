import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth";
import path from "../routesPath";

export default function PrivateRoute({
  children,
  redirectTo = path.homeView,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
