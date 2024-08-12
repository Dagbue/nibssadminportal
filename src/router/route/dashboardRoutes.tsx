import {RouteConstant} from "../../util/constant/RouteConstant.ts";
import {type RouteType} from "../../util/type/route.ts";
import DashboardView from "../../views/DashboardView.tsx";
import ReportView from "../../views/ReportView.tsx";
import  PartnersView from "../../views/PartnersView.tsx"
import APIView from "../../views/APIview.tsx"
import UserManagementView from "../../views/UserManagementView.tsx";
import BillingView from "../../views/BillingView.tsx";
import SupportView from "../../views/SupportView.tsx";
import AggregatorView from "../../views/AggregatorView.tsx";
import CheckerView from "../../views/CheckerView.tsx"
import AccountSettingsView from "../../views/AccountSettingsView.tsx"
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
        metadata: {isProtected: false},
    },
    {
        path: RouteConstant.dashboard.partners.path,
        name: RouteConstant.dashboard.partners.name,
        element: <PartnersView
        />,
        metadata: { isProtected: false },
    },
    {
        path: RouteConstant.dashboard.API.path,
        name: RouteConstant.dashboard.API.name,
        element: <APIView
        />,
        metadata: {isProtected: false},
    },
    {
        path: RouteConstant.dashboard.user.path,
        name: RouteConstant.dashboard.user.name,
        element: <UserManagementView
        />,
        metadata: { isProtected: false },

    },
    {
        path: RouteConstant.dashboard.billing.path,
        name: RouteConstant.dashboard.billing.name,
        element: <BillingView
        />,
        metadata: { isProtected: false },

    },
    {
        path: RouteConstant.dashboard.support.path,
        name: RouteConstant.dashboard.support.name,
        element: <SupportView
        />,
        metadata: { isProtected: false },

    },
    {
        path: RouteConstant.dashboard.aggregators.path,
        name: RouteConstant.dashboard.aggregators.name,
        element: <AggregatorView
        />,
        metadata: { isProtected: false },

    },
    {
        path: RouteConstant.dashboard.checker.path,
        name: RouteConstant.dashboard.checker.name,
        element: <CheckerView
        />,
        metadata: { isProtected: false },

    },
    {
        path: RouteConstant.dashboard.accountsettings.path,
        name: RouteConstant.dashboard.accountsettings.name,
        element: <AccountSettingsView
        />,
        metadata: { isProtected: false },

    },

    ]