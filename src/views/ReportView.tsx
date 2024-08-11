
import DashboardLayout from "../layout/DashboardLayout.tsx";
import Report from "../components/cards/Report.tsx";


export default function ReportView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"Report"}
                dashboardSubHeading={"This is where you view all activities happening on your account"}
            >
                <Report/>
            </DashboardLayout>
        </>
    );
}
