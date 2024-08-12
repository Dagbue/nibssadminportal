import MarkerCheckerApproved from "../components/cards/MarkerChecker-Approved.tsx";
import DashboardLayout from "../layout/DashboardLayout.tsx";


export default function CheckerView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"Checker"}
                dashboardSubHeading={"Manage all actions executed by other users"}
            >
                <MarkerCheckerApproved/>
            </DashboardLayout>
        </>
    );
}