import BillingEmptyState from "../components/cards/BillingEmptyState.tsx";
import DashboardLayout from "../layout/DashboardLayout.tsx";


export default function BillingView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"Billing"}
                dashboardSubHeading={"Manage all billings created for partners"}
            >
                <BillingEmptyState/>
            </DashboardLayout>
        </>
    );
}
