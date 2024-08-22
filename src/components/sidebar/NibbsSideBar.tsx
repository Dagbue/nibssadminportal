
import NibssLogoImg from "../../assets/images/nibss_logo.png"
import {RouteConstant} from "../../util/constant/RouteConstant.ts";
import dashboardImg2 from "../../assets/images/layout-grid-line.svg"
import dashboardImg from "../../assets/images/layout-grid-line2.svg"
import reportImg from "../../assets/images/Vector.svg"
import reportImg2 from "../../assets/images/Vector2.svg"
import partnersImg from "../../assets/images/partnersImg.svg"
import partnersImg2 from "../../assets/images/partnersImg2.svg"
import APIImg from "../../assets/images/APIImg.svg"
import APIImg2 from "../../assets/images/APIImg2.svg"
import userImg from "../../assets/images/UserImg.svg"
import userImg2 from "../../assets/images/UserImg2.svg"
import nairaImg from "../../assets/images/Group-4-1.svg"
import nairaImg2 from "../../assets/images/Group 4-1-2.svg"
import supportImg from "../../assets/images/supportImg1.svg"
import supportImg2 from "../../assets/images/supportImg2.svg"
import aggImg from "../../assets/images/links-fill.svg"
import aggImg2 from "../../assets/images/links-fill-2.svg"
import checkerImg from "../../assets/images/checkbox-circle-line.svg"
import checkerImg2 from "../../assets/images/checkbox-circle-line2.svg"
import settingsImg from "../../assets/images/settings-4-line.svg"
import settingsImg2 from "../../assets/images/settingsimg.svg"


import {BaseNavLink} from "../nav/BaseNavLink.tsx";


export default function NibbsSideBar(){
    return(
        <>
            <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease"
                 data-easing2="ease" role="banner" className="sidebar w-nav">
            <div className="w-container">
                <nav role="navigation" className="w-nav-menu">
                    <div className="side-bar">
                        <div className="logo-admin-sidebar">
                            <div className="logo-admin-text-container">
                                <div className="logo-img">
                                    <img src= {NibssLogoImg} loading="lazy" alt="" className="logo"/>
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
                        <div className="sidebar-menu">
                            <div className="sidebar-menu-main-others-container">
                                <div className="sidebar-menu-main-container">
                                    <div className="sidebar-menu-others-text">MAIN</div>
                                    <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.home.path}
                                                 whiteIcon={dashboardImg} leftIcon={dashboardImg2}
                                                 to={RouteConstant.dashboard.home.path}>Dashboard</BaseNavLink>
                                    <BaseNavLink isClicked={window.location.pathname=== RouteConstant.dashboard.report.path} whiteIcon={reportImg2}
                                                 leftIcon={reportImg} to={RouteConstant.dashboard.report.path}>Report</BaseNavLink>
                                    <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.partners.path} whiteIcon={partnersImg2}
                                                 leftIcon={partnersImg} to={RouteConstant.dashboard.partners.path}>Partners</BaseNavLink>
                                    <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.API.path} whiteIcon={APIImg}
                                                 leftIcon={APIImg2} to={RouteConstant.dashboard.API.path}>API Management</BaseNavLink>
                                    <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.user.path} whiteIcon={userImg2}
                                                 leftIcon={userImg} to={RouteConstant.dashboard.user.path}>User Management</BaseNavLink>
                                    <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.billing.path} whiteIcon={nairaImg2}
                                                 leftIcon={nairaImg} to={RouteConstant.dashboard.billing.path}>Billing</BaseNavLink>
                                    <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.support.path} whiteIcon={supportImg2}
                                                 leftIcon={supportImg} to={RouteConstant.dashboard.support.path}>Support</BaseNavLink>



                                    {/*<BaseNavLink isClicked={window.location.pathname.includes('user')}*/}
                                    {/*             whiteIcon={userImg2} leftIcon={userImg}*/}
                                    {/*             to={RouteConstant.dashboard.userManagement.path}>User Management</BaseNavLink>*/}
                                    {/*<BaseNavLink isClicked={window.location.pathname.includes('dispute')}*/}
                                    {/*             whiteIcon={disputeImg2} leftIcon={disputeImg}*/}
                                    {/*             to={RouteConstant.dashboard.disputeManagement.path}>Dispute Management</BaseNavLink>*/}
                                    {/*<BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.alertManagement.path}*/}
                                    {/*             whiteIcon={alertImg2} leftIcon={alertImg}*/}
                                    {/*             to={RouteConstant.dashboard.alertManagement.path}>Alert Management</BaseNavLink>*/}
                                    {/*<div className="sidebar-main-menu-options">*/}
                                    {/*    <div className="menu-option-container">*/}
                                    {/*        <div className="menu-option-dashboard">*/}
                                    {/*            <div className="dashboard-img"><img src="../images/layout-grid-line.svg"*/}
                                    {/*                                                loading="lazy"*/}
                                    {/*                                                alt=""/></div>*/}
                                    {/*            <div className="dashboard-menu-text">Dashboard</div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="menu-option-container">*/}
                                    {/*        <div className="menu-option-dashboard">*/}
                                    {/*            <div className="dashboard-img"><img src="../images/pages-line.svg"*/}
                                    {/*                                                loading="lazy" alt=""/>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="dashboard-menu-text">Report</div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="menu-option-container">*/}
                                    {/*        <div className="menu-option-dashboard">*/}
                                    {/*            <div className="dashboard-img"><img*/}
                                    {/*                src="../images/user-settings-line.svg" loading="lazy"*/}
                                    {/*                alt=""/></div>*/}
                                    {/*            <div className="dashboard-menu-text">Partners</div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="menu-option-container">*/}
                                    {/*        <div className="menu-option-dashboard">*/}
                                    {/*            <div className="dashboard-img"><img src="../images/guide-line.svg"*/}
                                    {/*                                                loading="lazy" alt=""/>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="dashboard-menu-text">API Management</div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="menu-option-container">*/}
                                    {/*        <div className="menu-option-dashboard">*/}
                                    {/*            <div className="dashboard-img"><img*/}
                                    {/*                src="../images/user-settings-line.svg" loading="lazy"*/}
                                    {/*                alt=""/></div>*/}
                                    {/*            <div className="dashboard-menu-text">User Management</div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="menu-option-container">*/}
                                    {/*        <div className="menu-option-dashboard">*/}
                                    {/*            <div className="dashboard-img"><img src="../images/Group-4.svg"*/}
                                    {/*                                                loading="lazy" alt=""/>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="dashboard-menu-text">Billing</div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="menu-option-container">*/}
                                    {/*        <div className="menu-option-dashboard">*/}
                                    {/*            <div className="dashboard-img"><img src="../images/question-line.svg"*/}
                                    {/*                                                loading="lazy"*/}
                                    {/*                                                alt=""/></div>*/}
                                    {/*            <div className="dashboard-menu-text">Support</div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="sidebar-menu-others-container">
                                    <div className="sidebar-menu-others-text">OTHERS</div>
                                    <div className="sidebar-others-options">
                                        {/*<div className="menu-option-container">*/}
                                        {/*    <div className="menu-option-dashboard">*/}
                                        {/*        <div className="dashboard-img"><img src="../images/links-fill.svg"*/}
                                        {/*                                            loading="lazy" alt=""/>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="dashboard-menu-text">Aggregator</div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.aggregators.path} whiteIcon={aggImg2}
                                                     leftIcon={aggImg} to={RouteConstant.dashboard.aggregators.path}>Aggregators</BaseNavLink>
                                        <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.checker.path} whiteIcon={checkerImg2}
                                                     leftIcon={checkerImg} to={RouteConstant.dashboard.checker.path}>Checkers</BaseNavLink>
                                        <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.accountsettings.path} whiteIcon={settingsImg}
                                                     leftIcon={settingsImg2} to={RouteConstant.dashboard.accountsettings.path}>Account Settings</BaseNavLink>
                                        {/*<div className="menu-option-container">*/}
                                        {/*    <div className="menu-option-dashboard">*/}
                                        {/*        <div className="dashboard-img"><img*/}
                                        {/*            src="../images/checkbox-circle-line.svg"*/}
                                        {/*            loading="lazy" alt=""/></div>*/}
                                        {/*        <div className="dashboard-menu-text">Checker</div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="menu-option-container">*/}
                                        {/*    <div className="menu-option-dashboard">*/}
                                        {/*        <div className="dashboard-img"><img src="../images/settings-4-line.svg"*/}
                                        {/*                                            loading="lazy"*/}
                                        {/*                                            alt=""/></div>*/}
                                        {/*        <div className="dashboard-menu-text">Accounting Settings</div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="support-help-container">
                                <div className="need-support-img-text">
                                    <div className="need-support-img"><img src="../images/customer-service-2-fill.svg"
                                                                           loading="lazy" alt=""/></div>
                                    <div className="need-support-text">Need support?</div>
                                    <div className="cancel-btn"><img src="../images/close-fill.svg" loading="lazy"
                                                                     alt=""
                                                                     className="image-6"/></div>
                                </div>
                                <div className="contact-support-txt">Contact with one of our experts to get support.
                                </div>
                                <a href="#" className="button w-button">Get help</a><img
                                src="../images/arrow-right-line.svg"
                                loading="lazy" alt=""
                                className="image-5"/>
                            </div>
                        </div>
                        <div className="side-bar-divider"></div>
                        <div className="user-profile-container">
                            <div className="user-profile-inner-container">
                                <div className="user-avater"><img src="../images/Avatar.svg" loading="lazy" alt=""/>
                                </div>
                                <div className="name-email-txt-container">
                                    <div className="name-email-top-txt">Seun Orofin</div>
                                    <div className="name-email-bottom-txt">seun@qucoon.com</div>
                                </div>
                                <div className="right-arrow-head"><img src="../images/Frame-2.svg" loading="lazy" alt=""
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
        </>
    )
}