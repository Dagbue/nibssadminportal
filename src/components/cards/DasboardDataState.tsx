

export default function DashboardDataState(){
    return(
        <>
            <div className="empty-state-container data-state-container">
                <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease"
                     data-easing2="ease" role="banner" className="sidebar w-nav">
                    <div className="w-container">
                        <nav role="navigation" className="w-nav-menu">
                            <div className="side-bar">
                                <div className="logo-admin-sidebar">
                                    <div className="logo-admin-text-container">
                                        <div className="logo-img"><img src="../images/nibbs_logo-1-1.svg" loading="lazy"
                                                                       alt="" className="logo"/>
                                            <div className="logo-admin-text">
                                                <div className="logo-admin-text-top">
                                                    <p className="paragraph-4">Admin</p>
                                                </div>
                                                <div className="logo-admin-text-bottom">Manage account</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-bar-divider"></div>
                                {/*<div className="sidebar-menu">*/}
                                {/*    <div className="sidebar-menu-main-others-container">*/}
                                {/*        <div className="sidebar-menu-main-container">*/}
                                {/*            <div className="sidebar-menu-main">MAIN</div>*/}
                                {/*            <div className="sidebar-main-menu-options">*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/layout-grid-line.svg" loading="lazy" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="dashboard-menu-text">Dashboard</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/pages-line.svg" loading="lazy" alt=""/></div>*/}
                                {/*                        <div className="dashboard-menu-text">Report</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/user-settings-line.svg" loading="lazy"*/}
                                {/*                            alt=""/></div>*/}
                                {/*                        <div className="dashboard-menu-text">Partners</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/guide-line.svg" loading="lazy" alt=""/></div>*/}
                                {/*                        <div className="dashboard-menu-text">API Management</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/user-settings-line.svg" loading="lazy"*/}
                                {/*                            alt=""/></div>*/}
                                {/*                        <div className="dashboard-menu-text">User Management</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img src="../images/Group-4.svg"*/}
                                {/*                                                            loading="lazy" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="dashboard-menu-text">Billing</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/question-line.svg" loading="lazy" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="dashboard-menu-text">Support</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="sidebar-menu-others-container">*/}
                                {/*            <div className="sidebar-menu-others-text">OTHERS</div>*/}
                                {/*            <div className="sidebar-others-options">*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/links-fill.svg" loading="lazy" alt=""/></div>*/}
                                {/*                        <div className="dashboard-menu-text">Aggregator</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/checkbox-circle-line.svg" loading="lazy"*/}
                                {/*                            alt=""/></div>*/}
                                {/*                        <div className="dashboard-menu-text">Checker</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="menu-option-container">*/}
                                {/*                    <div className="menu-option-dashboard">*/}
                                {/*                        <div className="dashboard-img"><img*/}
                                {/*                            src="../images/settings-4-line.svg" loading="lazy" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="dashboard-menu-text">Accounting Settings</div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="support-help-container">*/}
                                {/*        <div className="need-support-img-text">*/}
                                {/*            <div className="need-support-img"><img*/}
                                {/*                src="../images/customer-service-2-fill.svg" loading="lazy" alt=""/>*/}
                                {/*            </div>*/}
                                {/*            <div className="need-support-text">Need support?</div>*/}
                                {/*            <div className="cancel-btn"><img src="../images/close-fill.svg"*/}
                                {/*                                             loading="lazy" alt="" className="image-6"/>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="contact-support-txt">Contact with one of our experts to get*/}
                                {/*            support.*/}
                                {/*        </div>*/}
                                {/*        <a href="#" className="button w-button">Get help</a><img*/}
                                {/*        src="../images/arrow-right-line.svg" loading="lazy" alt="" className="image-5"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="side-bar-divider"></div>
                                <div className="user-profile-container">
                                    <div className="user-profile-inner-container">
                                        <div className="user-avater"><img src="../images/Avatar.svg" loading="lazy"
                                                                          alt=""/></div>
                                        <div className="name-email-txt-container">
                                            <div className="name-email-top-txt">Seun Orofin</div>
                                            <div className="name-email-bottom-txt">seun@qucoon.com</div>
                                        </div>
                                        <div className="right-arrow-head"><img src="../images/Frame-2.svg"
                                                                               loading="lazy" alt=""
                                                                               className="image-7"/></div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
                <div className="header-content-container data-state-body margin-remove">
                    {/*<div className="dashboard-head dash-data-state">*/}
                    {/*    <div className="dashboard-icon-txt-container">*/}
                    {/*        <div className="dashboard-icon"><img src="../images/Frame-1618868326-8.svg" loading="lazy"*/}
                    {/*                                             alt=""/></div>*/}
                    {/*        <div className="dashboard-txt-container">*/}
                    {/*            <div className="dashboard-top-text">Dashboard</div>*/}
                    {/*            <div className="dashboard-btm-txt">This is where you view all activities happening on*/}
                    {/*                your account*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="notification-createapp-container">*/}
                    {/*        <div className="nofitication-img"><img src="../images/Frame-18.svg" loading="lazy" alt=""/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="app-api-user-container">
                        <div className="total-app-container app-container-2">
                            <div className="app-icon-text">
                                <div className="app-icon-img"><img src="../images/Frame-1618868316.svg" loading="lazy"
                                                                   alt="" className="reduce-img"/></div>
                                <div className="app-icon-txt-container">
                                    <div className="app-api-user-nmb">200</div>
                                </div>
                            </div>
                            <div className="app-api-user-decoration"><img src="../images/Group-2.svg" loading="lazy"
                                                                          width="69" alt=""
                                                                          className="image-9 dash-img"/></div>
                        </div>
                        <div className="total-app-container app-container-2">
                            <div className="app-icon-text">
                                <div className="app-icon-img"><img src="../images/Frame-1618868316-1.svg" loading="lazy"
                                                                   alt="" className="reduce-img"/></div>
                                <div className="app-icon-txt-container">
                                    <div className="app-api-user-nmb">103,423</div>
                                </div>
                            </div>
                            <div className="app-api-user-decoration"><img src="../images/Group-2.svg" loading="lazy"
                                                                          width="69" alt=""
                                                                          className="image-9 dash-img"/></div>
                        </div>
                        <div className="total-app-container app-container-2">
                            <div className="app-icon-text">
                                <div className="app-icon-img"><img src="../images/Frame-1618868316-2.svg" loading="lazy"
                                                                   alt="" className="reduce-img"/></div>
                                <div className="app-icon-txt-container">
                                    <div className="app-api-user-nmb">832</div>
                                </div>
                            </div>
                            <div className="app-api-user-decoration"><img src="../images/Group-2.svg" loading="lazy"
                                                                          width="66" alt=""
                                                                          className="image-9 dash-img"/></div>
                        </div>
                    </div>
                    <div className="activity-sppt-parthners">
                        <div className="activity-support-container">
                            <div className="activity-container">
                                <div className="activity-x3">
                                    <div className="activity-x2">
                                        <div className="activity-x2-top"><img src="../images/question-line.svg"
                                                                              loading="lazy" alt=""/>
                                            <div className="activity-top">Activities</div>
                                        </div>
                                        <div className="activity-x2-btm">All Activities</div>
                                    </div>
                                    <div className="view-activities">View Activities</div>
                                </div>
                                <div className="user-bank-container">
                                    <div className="user-bank-container1">
                                        <div className="user-login-bank">
                                            <div className="user-login-bank-top">Aliu Mohammed - United Bank of Africa
                                            </div>
                                            <div className="user-date-bank-btm">Login</div>
                                        </div>
                                        <div className="user-bank-date-container">Jan 3, 2024 . 12:00</div>
                                    </div>
                                    <div className="user-bank-container1">
                                        <div className="user-login-bank">
                                            <div className="user-login-bank-top">Aliu Mohammed - United Bank of Africa
                                            </div>
                                            <div className="user-date-bank-btm">Linked API to menu builder</div>
                                        </div>
                                        <div className="user-bank-date-container">Jan 3, 2024 . 12:00</div>
                                    </div>
                                    <div className="user-bank-container1">
                                        <div className="user-login-bank">
                                            <div className="user-login-bank-top">Aliu Mohammed - United Bank of Africa
                                            </div>
                                            <div className="user-date-bank-btm">Deleted API</div>
                                        </div>
                                        <div className="user-bank-date-container">Jan 3, 2024 . 12:00</div>
                                    </div>
                                    <div className="user-bank-container1">
                                        <div className="user-login-bank">
                                            <div className="user-login-bank-top">Susan Mulah - Access Company LTD</div>
                                            <div className="user-date-bank-btm">Deleted User</div>
                                        </div>
                                        <div className="user-bank-date-container">Jan 3, 2024 . 12:00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="activity-container">
                                <div className="activity-x3">
                                    <div className="activity-x2">
                                        <div className="activity-x2-top"><img src="../images/question-line.svg"
                                                                              loading="lazy" alt=""/>
                                            <div className="activity-top">Supports</div>
                                        </div>
                                        <div className="activity-x2-btm">Tickets</div>
                                    </div>
                                </div>
                                <div className="user-bank-container">
                                    <div className="user-bank-maincontainer">
                                        <div className="user-bank-container1 tickets">
                                            <div className="user-login-bank">
                                                <div className="user-login-bank-top">United Bank of Africa -
                                                    TIC2143144
                                                </div>
                                                <div className="user-date-bank-btm">Issues with USSD Builder</div>
                                            </div>
                                            <div className="user-bank-date-container">Jan 3, 2024 . 12:00</div>
                                        </div>
                                        <div>
                                            <div className="view-activities">View Tickets</div>
                                        </div>
                                    </div>
                                    <div className="user-bank-maincontainer">
                                        <div className="user-bank-container1 tickets">
                                            <div className="user-login-bank">
                                                <div className="user-login-bank-top">United Bank of Africa -
                                                    TIC2143144
                                                </div>
                                                <div className="user-date-bank-btm">Issues with USSD Builder</div>
                                            </div>
                                            <div className="user-bank-date-container">Jan 3, 2024 . 12:00</div>
                                        </div>
                                        <div>
                                            <div className="view-activities">View Tickets</div>
                                        </div>
                                    </div>
                                    <div className="user-bank-maincontainer">
                                        <div className="user-bank-container1 tickets">
                                            <div className="user-login-bank">
                                                <div className="user-login-bank-top">United Bank of Africa -
                                                    TIC2143144
                                                </div>
                                                <div className="user-date-bank-btm">Issues with USSD Builder</div>
                                            </div>
                                            <div className="user-bank-date-container">Jan 3, 2024 . 12:00</div>
                                        </div>
                                        <div>
                                            <div className="view-activities">View Tickets</div>
                                        </div>
                                    </div>
                                    <div className="user-bank-maincontainer">
                                        <div className="user-bank-container1 tickets">
                                            <div className="user-login-bank">
                                                <div className="user-login-bank-top">United Bank of Africa -
                                                    TIC2143144
                                                </div>
                                                <div className="user-date-bank-btm">Issues with USSD Builder</div>
                                            </div>
                                            <div className="user-bank-date-container">Jan 3, 2024 . 12:00</div>
                                        </div>
                                        <div>
                                            <div className="view-activities">View Tickets</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="partners-container">
                            <div className="partner-header">
                                <div className="div-block-6">Partners</div>
                                <div className="div-block-7">View all partners</div>
                            </div>
                            <div className="parthner-table-conatiner">
                                <div className="parthner-company-row">
                                    <div className="parthner-comany-head">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" data-wf-page-id="66a25d2e0318b12f67adcae3"
                                                  data-wf-element-id="f87eb46b-2ac6-2be7-e3b7-922a7cb73dfc"><label
                                                className="w-checkbox checkbox-field-8">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-7"></div>
                                                <input type="checkbox" id="checkbox-4" name="checkbox-4"
                                                       data-name="Checkbox 4"
                                                       style="opacity:0;position:absolute;z-index:-1"/><span
                                                className="checkbox-label-6 w-form-label"
                                                htmlFor="checkbox-4">Company</span>
                                            </label></form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <img src="../images/Frame-5-1.svg" loading="lazy" alt="" className="image-27"/>
                                    </div>
                                    <div className="parther-company-bank">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" className="form"
                                                  data-wf-page-id="66a25d2e0318b12f67adcae3"
                                                  data-wf-element-id="f87eb46b-2ac6-2be7-e3b7-922a7cb73e0a"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style="opacity:0;position:absolute;z-index:-1"/><span
                                                className="checkbox-label-4 w-form-label"
                                                htmlFor="checkbox-3"></span><img src="../images/Avatar-1.svg"
                                                                                 loading="lazy" alt=""/>
                                            </label>
                                                <div className="comany-bank-name-billing">
                                                    <div className="institution-name-txt">First Company Bank</div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="parther-company-bank">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" className="form"
                                                  data-wf-page-id="66a25d2e0318b12f67adcae3"
                                                  data-wf-element-id="f87eb46b-2ac6-2be7-e3b7-922a7cb73e1a"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style="opacity:0;position:absolute;z-index:-1"/><span
                                                className="checkbox-label-4 w-form-label"
                                                htmlFor="checkbox-3"></span><img src="../images/Avatar-1.svg"
                                                                                 loading="lazy" alt=""/>
                                            </label>
                                                <div className="comany-bank-name-billing">
                                                    <div className="institution-name-txt">First Company Bank</div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="parther-company-bank">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" className="form"
                                                  data-wf-page-id="66a25d2e0318b12f67adcae3"
                                                  data-wf-element-id="f87eb46b-2ac6-2be7-e3b7-922a7cb73e2a"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style="opacity:0;position:absolute;z-index:-1"/><span
                                                className="checkbox-label-4 w-form-label"
                                                htmlFor="checkbox-3"></span><img src="../images/Avatar-1.svg"
                                                                                 loading="lazy" alt=""/>
                                            </label>
                                                <div className="comany-bank-name-billing">
                                                    <div className="institution-name-txt">First Company Bank</div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="parther-company-bank">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" className="form"
                                                  data-wf-page-id="66a25d2e0318b12f67adcae3"
                                                  data-wf-element-id="f87eb46b-2ac6-2be7-e3b7-922a7cb73e3a"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style="opacity:0;position:absolute;z-index:-1"/><span
                                                className="checkbox-label-4 w-form-label"
                                                htmlFor="checkbox-3"></span><img src="../images/Avatar-1.svg"
                                                                                 loading="lazy" alt=""/>
                                            </label>
                                                <div className="comany-bank-name-billing">
                                                    <div className="institution-name-txt">First Company Bank</div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="parther-company-bank">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" className="form"
                                                  data-wf-page-id="66a25d2e0318b12f67adcae3"
                                                  data-wf-element-id="f87eb46b-2ac6-2be7-e3b7-922a7cb73e4a"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style="opacity:0;position:absolute;z-index:-1"/><span
                                                className="checkbox-label-4 w-form-label"
                                                htmlFor="checkbox-3"></span><img src="../images/Avatar-1.svg"
                                                                                 loading="lazy" alt=""/>
                                            </label>
                                                <div className="comany-bank-name-billing">
                                                    <div className="institution-name-txt">First Company Bank</div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="parther-company-bank">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" className="form"
                                                  data-wf-page-id="66a25d2e0318b12f67adcae3"
                                                  data-wf-element-id="f87eb46b-2ac6-2be7-e3b7-922a7cb73e5a"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style="opacity:0;position:absolute;z-index:-1"/><span
                                                className="checkbox-label-4 w-form-label"
                                                htmlFor="checkbox-3"></span><img src="../images/Avatar-1.svg"
                                                                                 loading="lazy" alt=""/>
                                            </label>
                                                <div className="comany-bank-name-billing">
                                                    <div className="institution-name-txt">First Company Bank</div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="parther-company-bank last-column">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" className="form"
                                                  data-wf-page-id="66a25d2e0318b12f67adcae3"
                                                  data-wf-element-id="f87eb46b-2ac6-2be7-e3b7-922a7cb73e6a"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style="opacity:0;position:absolute;z-index:-1"/><span
                                                className="checkbox-label-4 w-form-label"
                                                htmlFor="checkbox-3"></span><img src="../images/Avatar-1.svg"
                                                                                 loading="lazy" alt=""/>
                                            </label>
                                                <div className="comany-bank-name-billing">
                                                    <div className="institution-name-txt">First Company Bank</div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="type-row-conatiner">
                                    <div className="type-row-header">
                                        <div className="type-txt-box">Type</div>
                                        <img src="../images/Frame-5-1.svg" loading="lazy" alt=""/>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">Regional Bank</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">Regional Bank</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">Regional Bank</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">Regional Bank</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">Regional Bank</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">Regional Bank</div>
                                    </div>
                                    <div className="bank-type-box last-column">
                                        <div className="regional-bank-txt">Regional Bank</div>
                                    </div>
                                </div>
                                <div className="parthenr-id-row">
                                    <div className="parthner-id-header">
                                        <div className="parthner-id-txt">Partner ID</div>
                                        <img src="../images/Frame-5-1.svg" loading="lazy" alt="" className="image-28"/>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">NIB12141343</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">NIB12141343</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">NIB12141343</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">NIB12141343</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">NIB12141343</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">NIB12141343</div>
                                    </div>
                                    <div className="id-tst-container last-column">
                                        <div className="text-block">NIB12141343</div>
                                    </div>
                                </div>
                                <div className="date-created-column">
                                    <div className="date-created-bo">
                                        <div className="text-block-2">Date Created</div>
                                        <img src="../images/Frame-5-1.svg" loading="lazy" alt="" className="image-29"/>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block last-column">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="date-created-column">
                                    <div className="date-created-bo">
                                        <div className="text-block-2">Last Updated</div>
                                        <img src="../images/Frame-5-1.svg" loading="lazy" alt="" className="image-29"/>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block last-column">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">Jan 3,2023</div>
                                            <div className="time-btm-txt">10:30 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="status-block">
                                    <div className="status-header-box">Status</div>
                                    <div className="status-active-box">
                                        <div className="active-container-box">
                                            <p className="paragraph-5">Active</p>
                                        </div>
                                    </div>
                                    <div className="status-active-box">
                                        <div className="active-container-box">
                                            <p className="paragraph-5">Active</p>
                                        </div>
                                    </div>
                                    <div className="status-active-box">
                                        <div className="active-container-box">
                                            <p className="paragraph-5">Active</p>
                                        </div>
                                    </div>
                                    <div className="status-active-box">
                                        <div className="active-container-box">
                                            <p className="paragraph-5">Active</p>
                                        </div>
                                    </div>
                                    <div className="status-active-box">
                                        <div className="active-container-box">
                                            <p className="paragraph-5">Active</p>
                                        </div>
                                    </div>
                                    <div className="status-active-box">
                                        <div className="active-container-box">
                                            <p className="paragraph-5">Active</p>
                                        </div>
                                    </div>
                                    <div className="status-active-box last-box">
                                        <div className="active-container-box">
                                            <p className="paragraph-5">Active</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-option-row">
                                    <div className="menu-header"></div>
                                    <div className="menu-icon-container"><img src="../images/Dropdown.svg"
                                                                              loading="lazy" alt=""
                                                                              className="image-30"/></div>
                                    <div className="menu-icon-container"><img src="../images/Dropdown.svg"
                                                                              loading="lazy" alt=""
                                                                              className="image-30"/></div>
                                    <div className="menu-icon-container"><img src="../images/Dropdown.svg"
                                                                              loading="lazy" alt=""
                                                                              className="image-30"/></div>
                                    <div className="menu-icon-container"><img src="../images/Dropdown.svg"
                                                                              loading="lazy" alt=""
                                                                              className="image-30"/></div>
                                    <div className="menu-icon-container"><img src="../images/Dropdown.svg"
                                                                              loading="lazy" alt=""
                                                                              className="image-30"/></div>
                                    <div className="menu-icon-container"><img src="../images/Dropdown.svg"
                                                                              loading="lazy" alt=""
                                                                              className="image-30"/></div>
                                    <div className="menu-icon-container last-menu"><img src="../images/Dropdown.svg"
                                                                                        loading="lazy" alt=""
                                                                                        className="image-30"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}