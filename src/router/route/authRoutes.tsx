import { RouteConstant } from "../../util/constant/RouteConstant.ts";
import { type RouteType } from "../../util/type/route.ts";
import LoginView from "../../views/LoginView.tsx";


export const authRoutes: RouteType[] = [
  {
    path: RouteConstant.auth.initiateLogin.path,
    name: RouteConstant.auth.initiateLogin.name,
    element: <LoginView />,
    metadata: { isProtected: false },
  },
];
