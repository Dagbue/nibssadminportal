import DashboardLayout from "../layout/DashboardLayout.tsx";
import Dashboard from "../components/cards/Dashboard.tsx";


export default function DashboardView() {




    return (
        <>
            <DashboardLayout

                dashboardHeading={"Dashboard"}
                dashboardSubHeading={"This is where you view all activities happening on your account"}
            >
                <Dashboard />
            </DashboardLayout>
        </>
    );
}
