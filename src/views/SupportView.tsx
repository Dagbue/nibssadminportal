import DashboardLayout from "../layout/DashboardLayout.tsx";
import SupportEpmtyState from "../components/cards/Support-EpmtyState.tsx";


export default function SupportView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"Support"}
                dashboardSubHeading={"Manage all tickets created by partners"}
            >
                <SupportEpmtyState/>
            </DashboardLayout>
        </>
    );
}