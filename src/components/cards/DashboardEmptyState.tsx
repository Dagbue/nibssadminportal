
import emptystateImg from "../../assets/images/Empty-States.svg"
import RandomPattern from "../../assets/images/Group-2.svg"
import userIcon from "../../assets/images/Frame-1618868316-2.svg"
import coinstack from "../../assets/images/Frame-1618868326-1.svg"
import dashboardImg from "../../assets/images/Frame-1618868326-8.svg"

export default function DashboardEmptyState(){
    return(
        <>
            <div className="empty-state-container">
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
                            {/*                                src="../images/user-settings-line.svg" loading="lazy"*/}
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
                            {/*                                src="../images/user-settings-line.svg" loading="lazy"*/}
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
                <div className="header-content-container">
                    <div className="dashboard-head">
                        <div className="dashboard-icon-txt-container">
                            <div className="dashboard-icon"><img src= {dashboardImg} loading="lazy"
                                                                 alt=""/></div>
                            {/*<div className="dashboard-txt-container">*/}
                            {/*    <div className="dashboard-top-text dash-small">Dashboard</div>*/}
                            {/*    <div className="dashboard-btm-txt hide-text">This is where you view all activities*/}
                            {/*        happening on your account*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="notification-createapp-container">
                            <div className="add-icon"></div>
                        </div>
                        <div className="green-btn empty-state-green-btn w-embed">
                            <button
                                className="custom-btn"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    padding: '8px 16px',
                                    height: '40px',
                                    backgroundColor: '#356D00',
                                    color: 'currentColor',
                                    borderRadius: '12px',
                                    boxShadow: '0px 1px 3px 0px #f6f8fa',
                                    outline: 'none',
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                     fill="none">
                                    <path
                                        d="M9.16675 9.71558V4.71558H10.8334V9.71558H15.8334V11.3822H10.8334V16.3822H9.16675V11.3822H4.16675V9.71558H9.16675Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                AddPartner
                            </button>
                        </div>
                    </div>
                    <div className="dashboard-divider"></div>
                    <div className="app-api-user-container">
                        <div className="total-app-container">
                            <div className="app-icon-text icon-text-sm">
                                <div className="app-icon-img"><img src="../images/Frame-1618868316.svg" loading="lazy"
                                                                   width="30" alt="" className="img-smm"/></div>
                                <div className="app-icon-txt-container">
                                    <div className="app-icon-txt-top text-shrink t-sm">TOTAL APPS</div>
                                    <div className="app-api-user-nmb">0</div>
                                </div>
                            </div>
                            <div className="app-api-user-decoration"><img src={RandomPattern} loading="lazy"
                                                                          alt=""
                                                                          className="image-9 img-9 edit-img edit-img2"/>
                            </div>
                        </div>
                        <div className="total-app-container">
                            <div className="app-icon-text icon-text-sm">
                                <div className="app-icon-img"><img src= {coinstack} loading="lazy"
                                                                   width="31" alt="" className="img-smm"/></div>
                                <div className="app-icon-txt-container">
                                    <div className="app-icon-txt-top text-shrink t-sm">TOTAL API</div>
                                    <div className="app-api-user-nmb">0</div>
                                </div>
                            </div>
                            <div className="app-api-user-decoration"><img src={RandomPattern} loading="lazy"
                                                                          alt=""
                                                                          className="image-9 img-9 edit-img edit-img2"/>
                            </div>
                        </div>
                        <div className="total-app-container">
                            <div className="app-icon-text icon-text-sm">
                                <div className="app-icon-img"><img src= {userIcon}loading="lazy"
                                                                   width="31" alt="" className="img-smm"/></div>
                                <div className="app-icon-txt-container">
                                    <div className="app-icon-txt-top text-shrink t-sm">TOTAL USERS</div>
                                    <div className="app-api-user-nmb">0</div>
                                </div>
                            </div>
                            <div className="app-api-user-decoration"><img src={RandomPattern} loading="lazy"
                                                                          alt=""
                                                                          className="image-9 img-9 edit-img edit-img2"/>
                            </div>
                        </div>
                    </div>
                    <div className="createapp-container createapp-sm">
                        <div className="createapp-inner-container inner-container-sm">
                            <div className="createapp-img"><img src= {emptystateImg} loading="lazy" alt=""/>
                            </div>
                            <div className="createapp-txt-btn-container">
                                <div className="createapp-txt-container">
                                    <div className="createapp-top-txt">Whoops.. you&#x27;ve got no App</div>
                                    <div className="div-block-5">Start by creating your very first app</div>
                                </div>
                                {/*<div className="green-btn empty-state-green-btn w-embed">*/}
                                {/*    <button className="custom-btn" */}
                                {/*            style={{display:"flex", alignItems:"center",justifyContent:"center", padding:"12px 16px"}}*/}
                                {/*            */}
                                {/*            */}
                                {/*            style="display:flex;align-items:center;*/}
                                {/*                                                justify-content:center;*/}
                                {/*                                                gap:12px;*/}
                                {/*                                                padding:12px 16px;*/}
                                {/*                                                height:40px;*/}
                                {/*                                                background-color:#356D00;*/}
                                {/*                                                color:currentColor;*/}
                                {/*                                                border-radius:12px;*/}
                                {/*                                                box-shadow: 0px 1px 3px 0px #f6f8fa;*/}
                                {/*                                                outline:none;*/}
                                {/*                                               ">*/}
                                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"*/}
                                {/*             viewBox="0 0 20 21" fill="none">*/}
                                {/*            <path*/}
                                {/*                d="M9.16675 9.71558V4.71558H10.8334V9.71558H15.8334V11.3822H10.8334V16.3822H9.16675V11.3822H4.16675V9.71558H9.16675Z"*/}
                                {/*                fill="currentColor"></path>*/}
                                {/*        </svg>*/}
                                {/*        Create App*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}