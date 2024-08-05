import { ReactNode } from "react";
import NibbsSideBar from "../components/sidebar/NibbsSideBar.tsx";
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
        <main className="app-main-wrapper">
          <div className="topbar_component">
            <div className="dashboard-header">
              <div className="header-left">
                <div className="header-left-img">
                  <div className="topbar-icon w-embed">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
                        fill="#525866"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="header-text-container">
                  <div className="text-block-3">{dashboardHeading}</div>
                  <div className="text-block-4">{dashboardSubHeading}</div>
                </div>
              </div>
              <div className="header-right">
                <div
                  data-hover="false"
                  data-delay="200"
                  data-w-id="582cbda4-fafe-76b3-0a9d-7ab1b4d72539"
                  className="topbar1_menu-dropdown w-dropdown"
                >
                  <div className="topbar1_dropdown-toggle w-dropdown-toggle">
                    <div className="dropdown is-tertiary is-small is-icon-only">
                      <div className="notificatio-icon w-embed">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6667 14.1667H18.3334V15.8333H1.66669V14.1667H3.33335V8.33332C3.33335 6.56521 4.03573 4.86952 5.28598 3.61928C6.53622 2.36904 8.23191 1.66666 10 1.66666C11.7681 1.66666 13.4638 2.36904 14.7141 3.61928C15.9643 4.86952 16.6667 6.56521 16.6667 8.33332V14.1667ZM15 14.1667V8.33332C15 7.00724 14.4732 5.73547 13.5356 4.79779C12.5979 3.86011 11.3261 3.33332 10 3.33332C8.67394 3.33332 7.40217 3.86011 6.46449 4.79779C5.5268 5.73547 5.00002 7.00724 5.00002 8.33332V14.1667H15ZM7.50002 17.5H12.5V19.1667H7.50002V17.5Z"
                            fill="#868C98"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <nav className="topbar1_dropdown-list w-dropdown-list">
                    <div className="topbar1_dropdown-content">
                      <div className="topbar1_notification-header">
                        <div className="text-size-medium text-weight-semibold">
                          Notifications
                        </div>
                        <a href="#" className="button-4 is-link w-button">
                          Mask as read
                        </a>
                      </div>
                      <div className="topbar1_dropdown-divider"></div>
                      <div className="topbar1_notification-wrapper">
                        <div className="topbar1_notification">
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              width="currentWidth"
                              height="currentHeight"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="topbar1_notification-content">
                            <div>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </div>
                            <div
                              id="w-node-_582cbda4-fafe-76b3-0a9d-7ab1b4d7254b-b4d7252e"
                              className="margin-top margin-xxsmall"
                            >
                              <div className="text-size-small">11 Jan 2022</div>
                            </div>
                          </div>
                        </div>
                        <div className="topbar1_notification">
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              width="currentWidth"
                              height="currentHeight"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="topbar1_notification-content">
                            <div>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </div>
                            <div
                              id="w-node-_582cbda4-fafe-76b3-0a9d-7ab1b4d72553-b4d7252e"
                              className="margin-top margin-xxsmall"
                            >
                              <div className="text-size-small">11 Jan 2022</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="topbar1_dropdown-divider"></div>
                      <div className="topbar1_notification-buttons">
                        <a
                          href="#"
                          className="button-4 is-link is-icon w-inline-block"
                        >
                          <div>View All</div>
                          <div className="icon-embed-xxsmall w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 3L11 8L6 13"
                                stroke="currentColor"
                                stroke-width="1.5"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className={"layout-btn"}>
                  {layoutButton}
                </div>

                {/*<button onClick={toggleCreateApp} className="create-app-btn">*/}
                {/*  <div className="icon-embed-xsmall w-embed">*/}
                {/*    <svg*/}
                {/*      width="20"*/}
                {/*      height="20"*/}
                {/*      viewBox="0 0 20 20"*/}
                {/*      fill="none"*/}
                {/*      xmlns="http://www.w3.org/2000/svg"*/}
                {/*    >*/}
                {/*      <path*/}
                {/*        d="M9.16669 9.16666V4.16666H10.8334V9.16666H15.8334V10.8333H10.8334V15.8333H9.16669V10.8333H4.16669V9.16666H9.16669Z"*/}
                {/*        fill="white"*/}
                {/*      ></path>*/}
                {/*    </svg>*/}
                {/*  </div>*/}
                {/*  <div className={"create-app-btn-txt"}>Create App</div>*/}
                {/*</button>*/}
                {/*{isVisible && (*/}
                {/*  <CreateAppModal*/}
                {/*    openNew={toggleCreateNewApp}*/}
                {/*    onClose={() => setIsVisible(false)}*/}
                {/*  />*/}
                {/*)}*/}
                {/*{isVisibleNew && (*/}
                {/*  <CreateNewAppModal onClose={toggleModalCreateApp} />*/}
                {/*)}*/}
              </div>
            </div>
            <div className="divider"></div>
          </div>
          <div className="app-wrapper">{children}</div>
        </main>
      </main>
    </>
  );
}
