import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

interface SecuredRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

function SecuredRoute(props: SecuredRouteProps) {
  const { role, status } = useAuth();
  const location = useLocation();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        Загрузка...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }

  if (role === "loading") {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold ">
        Загрузка...
      </div>
    );
  }

  if (props.allowedRoles && !props.allowedRoles.includes(role)) {
    return <Navigate to={`/`} />;
  }

  return <>{props.children}</>;
}

export default SecuredRoute;
