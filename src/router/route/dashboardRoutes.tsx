import {RouteConstant} from "../../util/constant/RouteConstant.ts";
import {type RouteType} from "../../util/type/route.ts";
import DashboardView from "../../views/DashboardView.tsx";
import ReportView from "../../views/ReportView.tsx";

export const dashboardRoutes: RouteType[] = [
    {
        path: RouteConstant.dashboard.home.path,
        name: RouteConstant.dashboard.home.name,
        element: <DashboardView />,
        metadata: { isProtected: false },
    },
    {
        path: RouteConstant.dashboard.report.path,
        name: RouteConstant.dashboard.report.name,
        element: <ReportView
        />,
        metadata: { isProtected: false },
    },
    ]