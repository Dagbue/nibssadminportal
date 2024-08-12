

import UserManagementEmptyState from "../components/cards/UserManagement-EmptyState.tsx";
import DashboardLayout from "../layout/DashboardLayout.tsx";


export default function UserManagementView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"User Management"}
                dashboardSubHeading={"This is where you see all users on this account"}
            >
                <UserManagementEmptyState/>
            </DashboardLayout>
        </>
    );
}