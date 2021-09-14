import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth";
import path from "../routesPath";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = path.homeView,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
