import { ReactNode } from "react";
import NibbsSideBar from "../components/sidebar/NibbsSideBar.tsx";
import DasboardImg from "../assets/images/Frame-1618868326-8.svg"
// import CreateNewAppModal from '../components/modal/CreateNewAppModal.tsx';


export type LayoutType = {
  children: ReactNode;
  dashboardSubHeading: string;
  dashboardHeading: string;
  layoutButton?:ReactNode
};

export default function DashboardLayout({
  children,
  dashboardHeading,
  dashboardSubHeading,
  layoutButton
}: LayoutType) {


  return (
    <>
      <main className="main-app-wrapper">
        <NibbsSideBar/>
          <div className="header-content-container">
            <div className="dashboard-head">
              <div className="dashboard-icon-txt-container">
                <div className="dashboard-icon"><img src= {DasboardImg}loading="lazy" alt=""/>
                </div>
                <div className="dashboard-txt-container">
                  <div className="dashboard-top-text dash-small">{dashboardHeading}</div>
                  <div className="dashboard-btm-txt hide-text">{dashboardSubHeading}
                  </div>
                </div>
              </div>
              <div className="notification-createapp-container">
                <div className="add-icon"></div>
              </div>
              <div className="green-btn empty-state-green-btn w-embed">
                <button className="dashboard-create" style={{
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  gap:"12px",
                  padding:"12px 6px",
                  height:"40px",
                  width: "132px",
                  backgroundColor:"#356D00",
                  color:"currentColor",
                  borderRadius:"12px",
                  boxShadow: "0px 1px 3px 0px #f6f8fa",
                  outline:"none",
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                        d="M9.16675 9.71558V4.71558H10.8334V9.71558H15.8334V11.3822H10.8334V16.3822H9.16675V11.3822H4.16675V9.71558H9.16675Z"
                        fill="currentColor"></path>
                  </svg>
                  {layoutButton}
                </button>
              </div>
            </div>
            <div className="dashboard-divider"></div>
            {children}

          </div>

      </main>
    </>
  );
}
