import DashboardLayout from "../layout/DashboardLayout.tsx";
import Aggregator from "../components/cards/Aggregator.tsx";


export default function AggregatorView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"Aggregators"}
                dashboardSubHeading={"Manage all USSD aggregators"}
            >
                <Aggregator/>
            </DashboardLayout>
        </>
    );
}