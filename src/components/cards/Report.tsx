
import reportImg from "../../assets/images/Frame-1618868326-2.svg"
import nairaImg from "../../assets/images/Group-4-1.svg"
import arrowImg from "../../assets/images/lead-icon.svg"
import barchartImg from "../../assets/images/Line-and-bar-chart.svg"
import questionLine from "../../assets/images/question-line.svg"
import piechartImg from "../../assets/images/Frame-178.svg"
import nairaImg2 from "../../assets/images/Group-4-1.svg"
import chartImg from "../../assets/images/Chart.svg"
import redarrowImg from "../../assets/images/lead-icon-1.svg"
import redchartImg from "../../assets/images/Chart-1.svg"
import usericonImg from "../../assets/images/user-line.svg"
import activityguageImg from "../../assets/images/Activity-gauge.svg"
export default function Report () {
    return (
        <>
            <div className="header-content-container report-body">
                {/*<div className="dashboard-head">*/}
                {/*    <div className="dashboard-icon-txt-container">*/}
                {/*        <div className="dashboard-icon"><img src= {"reportImg"} loading="lazy"*/}
                {/*                                             alt=""/></div>*/}
                {/*        <div className="dashboard-txt-container">*/}
                {/*            <div className="dashboard-top-text">Report</div>*/}
                {/*            <div className="dashboard-btm-txt">This is where you view all activities happening on your*/}
                {/*                account*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="notification-createapp-container">*/}
                {/*        <div className="nofitication-img"><img src="../images/Frame-18.svg" loading="lazy" alt=""/>*/}
                {/*        </div>*/}
                {/*        <div className="add-icon"><img src="../images/add-line.svg" loading="lazy" alt=""*/}
                {/*                                     className="image-8"/></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="report-divider"></div>*/}
                <div className="report-card-container">
                    <a href="#" className="button-8 w-button">Export Report</a>
                    <div className="billing-report-ticket-container">
                        <div className="billing-report-box">
                            <div className="billing-report-top-box">
                                <div className="billing-report-txt-box">
                                    <div className="billing-txt-icon-container">
                                        <div className="ngn-currency-icon"><img src= {nairaImg}
                                                                                loading="lazy" alt=""/></div>
                                        <div className="billing-txt">Billing</div>
                                    </div>
                                    <div className="billing-report-txt">Billing Report</div>
                                    <div className="numbers-box">
                                        <div className="number-amt">N62,568,000.90</div>
                                        <div className="rate-box"><img src= {arrowImg} loading="lazy"
                                                                       alt=""/>
                                            <div className="rate-number-percentage">160%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-billings">View Billings</div>
                            </div>
                            <img src= {barchartImg} loading="lazy" alt=""/>
                        </div>
                        <div className="support-ticket-container">
                            <div className="support-header-container">
                                <div className="sppt-tckts-container">
                                    <div className="support-icon-txt-upper">
                                        <div className="sppt-icon-upper"><img src= {questionLine}
                                                                              loading="lazy" alt=""/></div>
                                        <div className="support-text-upper">Supports</div>
                                    </div>
                                </div>
                                <div className="ticket-txt-bottom">Tickets</div>
                            </div>
                            <img src={piechartImg} loading="lazy" alt=""/>
                        </div>
                    </div>
                    <div className="billing-report-ticket-container">
                        <div className="billing-report-box">
                            <div className="billing-report-top-box">
                                <div className="billing-report-txt-box">
                                    <div className="billing-txt-icon-container">
                                        <div className="ngn-currency-icon"><img src= {nairaImg2}
                                                                                loading="lazy" alt=""/></div>
                                        <div className="billing-txt">Billing</div>
                                    </div>
                                    <div className="billing-report-txt">Payed Bills</div>
                                    <div className="numbers-box">
                                        <div className="number-amt">N8,568,000.90</div>
                                        <div className="rate-box"><img src= {arrowImg} loading="lazy"
                                                                       alt=""/>
                                            <div className="rate-number-percentage">160%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src= {chartImg} loading="lazy" alt=""/>
                        </div>
                        <div className="billing-report-box">
                            <div className="billing-report-top-box">
                                <div className="billing-report-txt-box">
                                    <div className="billing-txt-icon-container">
                                        <div className="ngn-currency-icon"><img src= {nairaImg2}
                                                                                loading="lazy" alt=""/></div>
                                        <div className="billing-txt">Billing</div>
                                    </div>
                                    <div className="billing-report-txt">Unpayed Bills</div>
                                    <div className="numbers-box">
                                        <div className="number-amt">N1,568,000.90</div>
                                        <div className="rate-box"><img src= {redarrowImg}loading="lazy"
                                                                       alt=""/>
                                            <div className="rate-number-percentage">20%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src= {redchartImg} loading="lazy" alt=""/>
                        </div>
                    </div>
                    <div className="billing-report-ticket-container">
                        <div className="billing-report-box">
                            <div className="billing-report-top-box">
                                <div className="billing-report-txt-box">
                                    <div className="billing-txt-icon-container">
                                        <div className="ngn-currency-icon"><img src= {usericonImg}
                                                                                loading="lazy" alt=""/></div>
                                        <div className="billing-txt">Partners</div>
                                    </div>
                                    <div className="billing-report-txt">Partners</div>
                                    <div className="numbers-box">
                                        <div className="number-amt">720</div>
                                        <div className="rate-box"><img src= {arrowImg} loading="lazy"
                                                                       alt=""/>
                                            <div className="rate-number-percentage">160%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-billings">View Billings</div>
                            </div>
                            <img src= {barchartImg} loading="lazy" alt=""/>
                        </div>
                        <div className="support-ticket-container">
                            <div className="support-header-container">
                                <div className="sppt-tckts-container">
                                    <div className="support-icon-txt-upper">
                                        <div className="sppt-icon-upper"><img src= {usericonImg}
                                                                              loading="lazy" alt=""/></div>
                                        <div className="support-text-upper">Users</div>
                                    </div>
                                </div>
                                <div className="ticket-txt-bottom">Active User</div>
                            </div>
                            <img src={activityguageImg} loading="lazy" alt="" className="image-14"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}