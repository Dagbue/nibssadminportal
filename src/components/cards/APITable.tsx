import Avatar1Img from "../../assets/images/Avatar-1.svg"
import dashboardImg from "../../assets/images/Frame-1618868326-8.svg"
import bellImg from "../../assets/images/Frame-18.svg"
import upanddownimg from "../../assets/images/Frame-5-1.svg"

export default function APITable(){
    return (
        <>
            <div className="empty-state-container">
                <div className="header-content-container">
                    <div className="dashboard-head">
                        <div className="dashboard-icon-txt-container">
                            <div className="dashboard-icon"><img src= {dashboardImg} loading="lazy"
                                                                 alt=""/></div>
                            <div className="dashboard-txt-container">
                                <div className="dashboard-top-text">API Management</div>
                                <div className="dashboard-btm-txt">This is where you view all API’s under this partner
                                    account
                                </div>
                            </div>
                        </div>
                        <div className="bell-add-partner-container"><img src= {bellImg} loading="lazy"
                                                                         alt=""/></div>
                    </div>
                    <div className="all-billings-container">
                        <div className="all-billings-header">
                            <div className="all-partners-txt-container">
                                <div className="all-partners-top-txt">All Partners</div>
                                <div className="all-partners-btm-txt">This is a list of all the partners you have on
                                    your account
                                </div>
                            </div>
                            <a href="#" className="button-13 w-button">Export list</a>
                        </div>
                        <div className="billing-empty-state-content on-board-state">
                            <div className="deposit-nondeposit-tab">
                                <div className="search-filter-container billing-search-filter-container">
                                    <div className="w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                              data-wf-page-id="66ab4f5c545fb122260c44f1"
                                              data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559e4b"><input
                                            className="billing-searchbar api-search w-input" 
                                            name="field-2" data-name="Field 2" placeholder="Search" type="text"
                                            id="field-2" /></form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="parthner-table-conatiner">
                                <div className="parthner-company-row api-company-table">
                                    <div className="parthner-comany-head">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" data-wf-page-id="66ab4f5c545fb122260c44f1"
                                                  data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559e60"><label
                                                className="w-checkbox checkbox-field-8">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-7"></div>
                                                <input type="checkbox" id="checkbox-4" name="checkbox-4"
                                                       data-name="Checkbox 4"
                                                       style={{opacity:"0",position:"absolute", zIndex:"-1"}}/><span
                                                className="checkbox-label-6 w-form-label"
                                                >Company</span>
                                            </label></form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <img src = {upanddownimg} loading="lazy" alt="" className="image-27"/>
                                    </div>
                                    <div className="parther-company-bank">
                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2"
                                                  method="get" className="form"
                                                  data-wf-page-id="66ab4f5c545fb122260c44f1"
                                                  data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559e6e"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style={{opacity:"0",position:"absolute", zIndex:"-1"}}/><span
                                                className="checkbox-label-4 w-form-label"
                                               ></span><img src={Avatar1Img}
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
                                                  data-wf-page-id="66ab4f5c545fb122260c44f1"
                                                  data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559e7e"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style={{opacity:"0",position:"absolute", zIndex:"-1"}}/><span
                                                className="checkbox-label-4 w-form-label"
                                               ></span><img src={Avatar1Img}
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
                                                  data-wf-page-id="66ab4f5c545fb122260c44f1"
                                                  data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559e8e"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style={{opacity:"0",position:"absolute", zIndex:"-1"}}/><span
                                                className="checkbox-label-4 w-form-label"
                                               ></span><img src={Avatar1Img}
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
                                                  data-wf-page-id="66ab4f5c545fb122260c44f1"
                                                  data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559e9e"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style={{opacity:"0",position:"absolute", zIndex:"-1"}}/><span
                                                className="checkbox-label-4 w-form-label"
                                               ></span><img src={Avatar1Img}
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
                                                  data-wf-page-id="66ab4f5c545fb122260c44f1"
                                                  data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559eae"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style={{opacity:"0",position:"absolute", zIndex:"-1"}}/><span
                                                className="checkbox-label-4 w-form-label"
                                               ></span><img src={Avatar1Img}
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
                                                  data-wf-page-id="66ab4f5c545fb122260c44f1"
                                                  data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559ebe"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style={{opacity:"0",position:"absolute", zIndex:"-1"}}/><span
                                                className="checkbox-label-4 w-form-label"
                                               ></span><img src={Avatar1Img}
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
                                                  data-wf-page-id="66ab4f5c545fb122260c44f1"
                                                  data-wf-element-id="c0b1b2e3-de99-f868-68d0-1def3b559ece"><label
                                                className="w-checkbox checkbox-field-4">
                                                <div
                                                    className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3 company-parthner-bank-checkbox"></div>
                                                <input type="checkbox" id="checkbox-3" name="checkbox-3"
                                                       data-name="Checkbox 3"
                                                       style={{opacity:"0",position:"absolute", zIndex:"-1"}}/><span
                                                className="checkbox-label-4 w-form-label"
                                               ></span><img src={Avatar1Img}
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
                                <div className="type-row-conatiner added-api-table">
                                    <div className="type-row-header">
                                        <div className="type-txt-box">No. of Added APi</div>
                                        <img src={upanddownimg}  loading="lazy" alt=""/>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">9</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">9</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">9</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">9</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">9</div>
                                    </div>
                                    <div className="bank-type-box">
                                        <div className="regional-bank-txt">9</div>
                                    </div>
                                    <div className="bank-type-box last-column">
                                        <div className="regional-bank-txt">9</div>
                                    </div>
                                </div>
                                <div className="parthenr-id-row active-api-table">
                                    <div className="parthner-id-header active-api-header">
                                        <div className="parthner-id-txt">No. of Active API</div>
                                        <img src={upanddownimg} loading="lazy" alt="" className="image-28"/>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">1</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">0</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">0</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">0</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">0</div>
                                    </div>
                                    <div className="id-tst-container">
                                        <div className="text-block">0</div>
                                    </div>
                                    <div className="id-tst-container last-column">
                                        <div className="text-block">0</div>
                                    </div>
                                </div>
                                <div className="date-created-column inactive-api-table">
                                    <div className="date-created-bo inactive-api-header">
                                        <div className="text-block-2">No. of inactive API</div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">0</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">23</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">8</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">6</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">5</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">23</div>
                                        </div>
                                    </div>
                                    <div className="date-time-block last-column">
                                        <div className="date-time-txt">
                                            <div className="date-top-txt">4</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="date-created-column update-api-table">
                                    <div className="date-created-bo">
                                        <div className="text-block-2">Last Updated</div>
                                        <img src={upanddownimg} loading="lazy" alt="" className="image-29"/>
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
                                    <div className="status-active-box view-api-table">View API&#x27;s</div>
                                    <div className="status-active-box view-api-table">View API&#x27;s</div>
                                    <div className="status-active-box view-api-table">View API&#x27;s</div>
                                    <div className="status-active-box view-api-table">View API&#x27;s</div>
                                    <div className="status-active-box view-api-table">View API&#x27;s</div>
                                    <div className="status-active-box view-api-table">View API&#x27;s</div>
                                    <div className="status-active-box view-api-table view-api-btm">View API&#x27;s</div>
                                </div>
                            </div>
                        </div>
                        <div className="parthners-divider btm-divider"></div>
                        <div className="all-activities-footer agg-paganation">
                            <a href="#" className="button-5 w-button">Previous</a>
                            <div className="page-number-box">
                                <div className="pg-number">1</div>
                                <div className="pg-number">2</div>
                                <div className="pg-number">3</div>
                                <div className="pg-number">...</div>
                                <div className="pg-number">8</div>
                                <div className="pg-number">9</div>
                                <div className="pg-number">10</div>
                            </div>
                            <a href="#" className="button-7 w-button">Next</a>
                        </div>
                    </div>
                </div>
                <div className="side-bar">
                    <div className="logo-admin-sidebar">
                        <div className="logo-admin-text-container">
                            <div className="logo-img"><img src="../images/nibbs_logo-1-1.svg" loading="lazy" alt=""
                                                           className="logo"/>
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
                                <div className="sidebar-menu-main">MAIN</div>
                                <div className="sidebar-main-menu-options">
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/layout-grid-line.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">Dashboard</div>
                                        </div>
                                    </div>
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/pages-line.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">Report</div>
                                        </div>
                                    </div>
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/user-settings-line.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">Partners</div>
                                        </div>
                                    </div>
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/guide-line.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">API Management</div>
                                        </div>
                                    </div>
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/user-settings-line.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">User Management</div>
                                        </div>
                                    </div>
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/Group-4.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">Billing</div>
                                        </div>
                                    </div>
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/question-line.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-menu-others-container">
                                <div className="sidebar-menu-others-text">OTHERS</div>
                                <div className="sidebar-others-options">
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/links-fill.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">Aggregator</div>
                                        </div>
                                    </div>
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/checkbox-circle-line.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">Checker</div>
                                        </div>
                                    </div>
                                    <div className="menu-option-container">
                                        <div className="menu-option-dashboard">
                                            <div className="dashboard-img"><img src="../images/settings-4-line.svg"
                                                                                loading="lazy" alt=""/></div>
                                            <div className="dashboard-menu-text">Accounting Settings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="support-help-container">
                            <div className="need-support-img-text">
                                <div className="need-support-img"><img src="../images/customer-service-2-fill.svg"
                                                                       loading="lazy" alt=""/></div>
                                <div className="need-support-text">Need support?</div>
                                <div className="cancel-btn"><img src="../images/close-fill.svg" loading="lazy" alt=""
                                                                 className="image-6"/></div>
                            </div>
                            <div className="contact-support-txt">Contact with one of our experts to get support.</div>
                            <a href="#" className="button w-button">Get help</a><img
                            src="../images/arrow-right-line.svg" loading="lazy" alt="" className="image-5"/>
                        </div>
                    </div>
                    <div className="side-bar-divider"></div>
                    <div className="user-profile-container">
                        <div className="user-profile-inner-container">
                            <div className="user-avater"><img src="../images/Avatar.svg" loading="lazy" alt=""/></div>
                            <div className="name-email-txt-container">
                                <div className="name-email-top-txt">Seun Orofin</div>
                                <div className="name-email-bottom-txt">seun@qucoon.com</div>
                            </div>
                            <div className="right-arrow-head"><img src="../images/Frame-2.svg" loading="lazy" alt=""
                                                                   className="image-7"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
