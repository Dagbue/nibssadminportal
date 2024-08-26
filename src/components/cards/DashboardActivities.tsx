
import usersettingsImg from "../../assets/images/user-settings-line.svg"
export default function DashboardActivities(){
    return(
        <>
            <div className="empty-state-container activities-container">
                <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease"
                     data-easing2="ease" role="banner" className="sidebar w-nav">
                    <div className="w-container">
                        <nav role="navigation" className="w-nav-menu">
                            {/*<div className="side-bar">*/}
                            {/*    <div className="logo-admin-sidebar">*/}
                            {/*        <div className="logo-admin-text-container">*/}
                            {/*            <div className="logo-img"><img src="../images/nibbs_logo-1-1.svg" loading="lazy"*/}
                            {/*                                           alt="" className="logo"/>*/}
                            {/*                <div className="logo-admin-text">*/}
                            {/*                    <div className="logo-admin-text-top">*/}
                            {/*                        <p className="paragraph-4">Admin</p>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="logo-admin-text-bottom">Manage account</div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="side-bar-divider"></div>*/}
                            {/*    <div className="sidebar-menu">*/}
                            {/*        <div className="sidebar-menu-main-others-container">*/}
                            {/*            <div className="sidebar-menu-main-container">*/}
                            {/*                <div className="sidebar-menu-main">MAIN</div>*/}
                            {/*                <div className="sidebar-main-menu-options">*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src="../images/layout-grid-line.svg" loading="lazy" alt=""/>*/}
                            {/*                            </div>*/}
                            {/*                            <div className="dashboard-menu-text">Dashboard</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src="../images/pages-line.svg" loading="lazy" alt=""/></div>*/}
                            {/*                            <div className="dashboard-menu-text">Report</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src={usersettingsImg} loading="lazy"*/}
                            {/*                                alt=""/></div>*/}
                            {/*                            <div className="dashboard-menu-text">Partners</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src="../images/guide-line.svg" loading="lazy" alt=""/></div>*/}
                            {/*                            <div className="dashboard-menu-text">API Management</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src={usersettingsImg} loading="lazy"*/}
                            {/*                                alt=""/></div>*/}
                            {/*                            <div className="dashboard-menu-text">User Management</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img src="../images/Group-4.svg"*/}
                            {/*                                                                loading="lazy" alt=""/>*/}
                            {/*                            </div>*/}
                            {/*                            <div className="dashboard-menu-text">Billing</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src="../images/question-line.svg" loading="lazy" alt=""/>*/}
                            {/*                            </div>*/}
                            {/*                            <div className="dashboard-menu-text">Support</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="sidebar-menu-others-container">*/}
                            {/*                <div className="sidebar-menu-others-text">OTHERS</div>*/}
                            {/*                <div className="sidebar-others-options">*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src="../images/links-fill.svg" loading="lazy" alt=""/></div>*/}
                            {/*                            <div className="dashboard-menu-text">Aggregator</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src="../images/checkbox-circle-line.svg" loading="lazy"*/}
                            {/*                                alt=""/></div>*/}
                            {/*                            <div className="dashboard-menu-text">Checker</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="menu-option-container">*/}
                            {/*                        <div className="menu-option-dashboard">*/}
                            {/*                            <div className="dashboard-img"><img*/}
                            {/*                                src="../images/settings-4-line.svg" loading="lazy" alt=""/>*/}
                            {/*                            </div>*/}
                            {/*                            <div className="dashboard-menu-text">Accounting Settings</div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="support-help-container">*/}
                            {/*            <div className="need-support-img-text">*/}
                            {/*                <div className="need-support-img"><img*/}
                            {/*                    src="../images/customer-service-2-fill.svg" loading="lazy" alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="need-support-text">Need support?</div>*/}
                            {/*                <div className="cancel-btn"><img src="../images/close-fill.svg"*/}
                            {/*                                                 loading="lazy" alt="" className="image-6"/>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="contact-support-txt">Contact with one of our experts to get*/}
                            {/*                support.*/}
                            {/*            </div>*/}
                            {/*            <a href="#" className="button w-button">Get help</a><img*/}
                            {/*            src="../images/arrow-right-line.svg" loading="lazy" alt="" className="image-5"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="side-bar-divider"></div>*/}
                            {/*    <div className="user-profile-container">*/}
                            {/*        <div className="user-profile-inner-container">*/}
                            {/*            <div className="user-avater"><img src="../images/Avatar.svg" loading="lazy"*/}
                            {/*                                              alt=""/></div>*/}
                            {/*            <div className="name-email-txt-container">*/}
                            {/*                <div className="name-email-top-txt">Seun Orofin</div>*/}
                            {/*                <div className="name-email-bottom-txt">seun@qucoon.com</div>*/}
                            {/*            </div>*/}
                            {/*            <div className="right-arrow-head"><img src="../images/Frame-2.svg"*/}
                            {/*                                                   loading="lazy" alt=""*/}
                            {/*                                                   className="image-7"/></div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </nav>
                        <div className="w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
                <div className="header-content-container head-content-activities-container">
                    {/*<div className="dashboard-head">*/}
                    {/*    <div className="dashboard-icon-txt-container">*/}
                    {/*        <div className="dashboard-icon"><img src= {messageImg} loading="lazy"*/}
                    {/*                                             alt=""/></div>*/}
                    {/*        <div className="dashboard-txt-container">*/}
                    {/*            <div className="dashboard-top-text">Activities</div>*/}
                    {/*            <div className="dashboard-btm-txt">Manage all activities executed by partners</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="notification-createapp-container">*/}
                    {/*        <div className="nofitication-img"><img src= {bellImg} loading="lazy" alt=""/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="all-activities-container">
                        <div className="all-activities-header-box">
                            <div className="all-actvities-inner-box">
                                <div className="all-activities-txt-container">
                                    <div className="all-activities-top-txt">All Activities</div>
                                    <div className="all-activitiest-btm-txt">This is a list of all the activities
                                        carried out by the partners on your account
                                    </div>
                                </div>
                            </div>
                            <div className="custom-btn w-embed">
                                <button
                                    className="custom-btn"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        padding: '12px 16px',
                                        height: '40px',
                                        backgroundColor: '#fff',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e4e9',
                                        boxShadow: '0px 1px 3px 0px #f6f8fa',
                                        outline: 'none',
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                         fill="none">
                                        <path
                                            d="M3.33341 15.8333H16.6667V10H18.3334V16.6667C18.3334 16.8877 18.2456 17.0996 18.0893 17.2559C17.9331 17.4122 17.7211 17.5 17.5001 17.5H2.50008C2.27907 17.5 2.06711 17.4122 1.91083 17.2559C1.75455 17.0996 1.66675 16.8877 1.66675 16.6667V10H3.33341V15.8333ZM10.8334 7.5V13.3333H9.16675V7.5H5.00008L10.0001 2.5L15.0001 7.5H10.8334Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Export
                                </button>
                            </div>
                        </div>
                        <div className="all-activites-main-content">
                            <div className="icon-text-bnk-box">
                                <div className="icon-holdder-box adjust-img"><img src={usersettingsImg}
                                                                                  loading="lazy" width="Auto" alt=""
                                                                                  className="activity-img"/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                            <div className="icon-text-bnk-box">
                            <div className="icon-holdder-box adjust-img"><img src={usersettingsImg}
                                                                                  loading="lazy" alt=""/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                            <div className="icon-text-bnk-box">
                                <div className="icon-holdder-box adjust-img"><img src={usersettingsImg}
                                                                                  loading="lazy" alt=""/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                            <div className="icon-text-bnk-box">
                                <div className="icon-holdder-box adjust-img"><img src={"usersettingsImg"}
                                                                                  loading="lazy" alt=""/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                            <div className="icon-text-bnk-box">
                                <div className="icon-holdder-box adjust-img"><img src={"usersettingsImg"}
                                                                                  loading="lazy" alt=""/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                            <div className="icon-text-bnk-box">
                                <div className="icon-holdder-box adjust-img"><img src={usersettingsImg}
                                                                                  loading="lazy" alt=""/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                            <div className="icon-text-bnk-box">
                                <div className="icon-holdder-box adjust-img"><img src={usersettingsImg}
                                                                                  loading="lazy" alt=""/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                            <div className="icon-text-bnk-box">
                                <div className="icon-holdder-box adjust-img"><img src={"usersettingsImg"}
                                                                                  loading="lazy" alt=""/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                            <div className="icon-text-bnk-box">
                                <div className="icon-holdder-box adjust-img"><img src={"usersettingsImg"}
                                                                                  loading="lazy" alt=""/></div>
                                <div className="name-bnk-login">
                                    <div className="name-bnk-top-txt text-smm">Aliu Mohammed - United Bank of Africa
                                    </div>
                                    <div className="login-btm-txt lb-sm">Login</div>
                                </div>
                                <div className="date-time-container date-sm">Jan 3, 2024 . 12:00</div>
                            </div>
                        </div>
                        <div className="all-activities-footer footer-sm">
                            <div className="page-number-box">
                                <div className="pg-number pg-sm">1</div>
                                <div className="pg-number pg-sm">2</div>
                                <div className="pg-number pg-sm">3</div>
                                <div className="pg-number pg-sm">...</div>
                                <div className="pg-number pg-sm">8</div>
                                <div className="pg-number pg-sm">9</div>
                                <div className="pg-number pg-sm">10</div>
                            </div>
                            <div className="custom-btn previous-page-btn p-btn-sm w-embed">
                                <button
                                    className="custom-btn"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        padding: '12px 16px',
                                        height: '40px',
                                        backgroundColor: '#fff',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e4e9',
                                        boxShadow: '0px 1px 3px 0px #f6f8fa',
                                        outline: 'none',
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                         fill="none">
                                        <path
                                            d="M3.33341 15.8333H16.6667V10H18.3334V16.6667C18.3334 16.8877 18.2456 17.0996 18.0893 17.2559C17.9331 17.4122 17.7211 17.5 17.5001 17.5H2.50008C2.27907 17.5 2.06711 17.4122 1.91083 17.2559C1.75455 17.0996 1.66675 16.8877 1.66675 16.6667V10H3.33341V15.8333ZM10.8334 7.5V13.3333H9.16675V7.5H5.00008L10.0001 2.5L15.0001 7.5H10.8334Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Previous
                                </button>
                            </div>
                            <div className="custom-btn next-page-btn bt-sm w-embed">
                                <button
                                    className="custom-btn"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        padding: '12px 16px',
                                        height: '40px',
                                        backgroundColor: '#fff',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e4e9',
                                        boxShadow: '0px 1px 3px 0px #f6f8fa',
                                        outline: 'none',
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                         fill="none">
                                        <path
                                            d="M3.33341 15.8333H16.6667V10H18.3334V16.6667C18.3334 16.8877 18.2456 17.0996 18.0893 17.2559C17.9331 17.4122 17.7211 17.5 17.5001 17.5H2.50008C2.27907 17.5 2.06711 17.4122 1.91083 17.2559C1.75455 17.0996 1.66675 16.8877 1.66675 16.6667V10H3.33341V15.8333ZM10.8334 7.5V13.3333H9.16675V7.5H5.00008L10.0001 2.5L15.0001 7.5H10.8334Z"
                                            fill="currentColor"
                                        />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}