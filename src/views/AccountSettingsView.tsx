import DashboardLayout from "../layout/DashboardLayout.tsx";
import AccountSettingsPersonalInfo1 from "../components/cards/AccountSettings-PersonalInfo1.tsx"

export default function AggregatorView() {




    return (
        <>
            <DashboardLayout
                dashboardHeading={"Account Settings"}
                dashboardSubHeading={"Manage all settings for your account"}
            >
                <AccountSettingsPersonalInfo1/>
            </DashboardLayout>
        </>
    );
}