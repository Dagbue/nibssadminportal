import DashboardLayout from "../layout/DashboardLayout.tsx";
import PartnersOnboardState from "../components/cards/Partners-OnboardState.tsx";


export default function PartnersView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"Partners"}
                dashboardSubHeading={"This is where you view all activities happening on your account"}
            >
                <PartnersOnboardState/>
            </DashboardLayout>
        </>
    );
}