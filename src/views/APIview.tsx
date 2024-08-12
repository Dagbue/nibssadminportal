import DashboardLayout from "../layout/DashboardLayout.tsx";
import APIEmptyState from "../components/cards/APIEmptyState.tsx";


export default function APIView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"API Management"}
                dashboardSubHeading={"This is the list of all the APIs you have on your account"}
            >
                <APIEmptyState/>
            </DashboardLayout>
        </>
    );
}