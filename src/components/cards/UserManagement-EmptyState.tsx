
import emptystateImg from "../../assets/images/Empty-States.svg"

export default function UserManagementEmptyState (){
    return (
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
                            {/*    /!*<div className="side-bar-divider"></div>*!/*/}
                            {/*    /!*<div className="sidebar-menu">*!/*/}
                            {/*    /!*    <div className="sidebar-menu-main-others-container">*!/*/}
                            {/*    /!*        <div className="sidebar-menu-main-container">*!/*/}
                            {/*    /!*            <div className="sidebar-menu-main">MAIN</div>*!/*/}
                            {/*    /!*            <div className="sidebar-main-menu-options">*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/layout-grid-line.svg" loading="lazy" alt=""/>*!/*/}
                            {/*    /!*                        </div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">Dashboard</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/pages-line.svg" loading="lazy" alt=""/></div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">Report</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/user-settings-line.svg" loading="lazy"*!/*/}
                            {/*    /!*                            alt=""/></div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">Partners</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/guide-line.svg" loading="lazy" alt=""/></div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">API Management</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/user-settings-line.svg" loading="lazy"*!/*/}
                            {/*    /!*                            alt=""/></div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">User Management</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img src="../images/Group-4.svg"*!/*/}
                            {/*    /!*                                                            loading="lazy" alt=""/>*!/*/}
                            {/*    /!*                        </div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">Billing</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/question-line.svg" loading="lazy" alt=""/>*!/*/}
                            {/*    /!*                        </div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">Support</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*            </div>*!/*/}
                            {/*    /!*        </div>*!/*/}
                            {/*    /!*        <div className="sidebar-menu-others-container">*!/*/}
                            {/*    /!*            <div className="sidebar-menu-others-text">OTHERS</div>*!/*/}
                            {/*    /!*            <div className="sidebar-others-options">*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/links-fill.svg" loading="lazy" alt=""/></div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">Aggregator</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/checkbox-circle-line.svg" loading="lazy"*!/*/}
                            {/*    /!*                            alt=""/></div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">Checker</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*                <div className="menu-option-container">*!/*/}
                            {/*    /!*                    <div className="menu-option-dashboard">*!/*/}
                            {/*    /!*                        <div className="dashboard-img"><img*!/*/}
                            {/*    /!*                            src="../images/settings-4-line.svg" loading="lazy" alt=""/>*!/*/}
                            {/*    /!*                        </div>*!/*/}
                            {/*    /!*                        <div className="dashboard-menu-text">Accounting Settings</div>*!/*/}
                            {/*    /!*                    </div>*!/*/}
                            {/*    /!*                </div>*!/*/}
                            {/*    /!*            </div>*!/*/}
                            {/*    /!*        </div>*!/*/}
                            {/*    /!*    </div>*!/*/}
                            {/*    /!*    <div className="support-help-container">*!/*/}
                            {/*    /!*        <div className="need-support-img-text">*!/*/}
                            {/*    /!*            <div className="need-support-img"><img*!/*/}
                            {/*    /!*                src="../images/customer-service-2-fill.svg" loading="lazy" alt=""/>*!/*/}
                            {/*    /!*            </div>*!/*/}
                            {/*    /!*            <div className="need-support-text">Need support?</div>*!/*/}
                            {/*    /!*            <div className="cancel-btn"><img src="../images/close-fill.svg"*!/*/}
                            {/*    /!*                                             loading="lazy" alt="" className="image-6"/>*!/*/}
                            {/*    /!*            </div>*!/*/}
                            {/*    /!*        </div>*!/*/}
                            {/*    /!*        <div className="contact-support-txt">Contact with one of our experts to get*!/*/}
                            {/*    /!*            support.*!/*/}
                            {/*    /!*        </div>*!/*/}
                            {/*    /!*        <a href="#" className="button w-button">Get help</a><img*!/*/}
                            {/*    /!*        src="../images/arrow-right-line.svg" loading="lazy" alt="" className="image-5"/>*!/*/}
                            {/*    /!*    </div>*!/*/}
                            {/*    /!*</div>*!/*/}
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
                    {/*<div className="dashboard-head">*/}
                    {/*    <div className="dashboard-icon-txt-container">*/}
                    {/*        <div className="dashboard-icon"><img src="../images/Frame-1618868326-8.svg" loading="lazy"*/}
                    {/*                                             alt=""/></div>*/}
                    {/*    /!*    /!*<div className="dashboard-txt-container">*!/*!/*/}
                    {/*    /!*    /!*    <div className="dashboard-top-text">User Management</div>*!/*!/*/}
                    {/*    /!*    /!*    <div className="dashboard-btm-txt">This is where you see all users on this account</div>*!/*!/*/}
                    {/*    /!*    /!*</div>*!/*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*    /!*<div className="bell-add-partner-container"><img src="../images/Frame-18.svg" loading="lazy"*!/*/}
                    {/*    /!*                                                 width="32" alt=""/>*!/*/}
                    {/*    /!*    <a href="#" className="add-partner-button-container w-button">Add partner</a>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</div>*/}
                    {/*<div className="parthners-divider"></div>*/}
                    <div className="all-billings-container">
                        <div className="all-billings-header">
                            <div className="all-partners-txt-container">
                                <div className="all-partners-top-txt">All Users</div>
                                <div className="all-partners-btm-txt">This is a list of all the users you have on your
                                    account
                                </div>
                            </div>
                        </div>
                        <div className="billing-empty-state-content">
                            <div className="deposit-nondeposit-tab">
                                <div className="search-filter-container billing-search-filter-container">
                                    <div className="form-block-2 w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                              data-wf-page-id="66ab6a720be2667d5e8a1201"
                                              data-wf-element-id="65fb3737-d229-cef3-4040-313074ccdae8"><input
                                            className="billing-searchbar w-input" maxLength="256" name="field-2"
                                            data-name="Field 2" placeholder="Search" type="text" id="field-2"
                                            required=""/></form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                    <a href="#" className="button-10 w-button">Filter</a>
                                </div>
                                <div className="all-active-inactive-tabs user-management-tab">
                                    <div className="all-tab-container">All</div>
                                    <div className="active-tab-container um-admin-tab">Admins</div>
                                    <div className="inactive-tab-container um-pu-tab">Product User</div>
                                    <div className="audit-user-tab">Audit User</div>
                                </div>
                            </div>
                            <div className="whoops-first-container">
                                <div className="whoops-inner-container partner-whoops-container">
                                    <div className="empty-state-img-box"><img src={emptystateImg}
                                                                              loading="lazy" width="87" alt=""/></div>
                                    <div className="whoops-txt-container partner-bellow-whoops-btn">
                                        <div className="whoops-txt-upper"></div>
                                        <div className="whoop-txt-upper">Whoops.. you&#x27;ve got no user</div>
                                        <div className="whoops-txt-bottom">Start by adding your very first user</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}