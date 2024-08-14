import adduserImg from "../../assets/images/user-add-line.svg"


export default function BillingDetails2 (){
    return (
        <>
            <div className="add-parthner-modal-body">
                <div className="add-partner-her-container">
                    <div className="partner-avater-icon"><img src= {adduserImg} loading="lazy" alt=""/>
                    </div>
                    <div className="add-partner-inner-header">
                        <div className="header-text-container">Add Partner</div>
                        <div className="header-btm-text-container">Onboard a partner to your account</div>
                    </div>
                </div>
                <div className="sud-heading-container">
                    <div className="admin-detail-container">
                        <div className="admin-details-inner-container">
                            <div className="admin-detail-number">1</div>
                            <div className="admin-details-text">Admin Details</div>
                        </div>
                    </div>
                    <div className="admin-detail-container">
                        <div className="admin-details-inner-container">
                            <div className="admin-detail-number">2</div>
                            <div className="admin-details-text">Billing Details</div>
                        </div>
                    </div>
                    <div className="admin-detail-container">
                        <div className="admin-details-inner-container">
                            <div className="admin-detail-number">3</div>
                            <div className="admin-details-text">Integrations</div>
                        </div>
                    </div>
                    <div className="admin-detail-container">
                        <div className="admin-details-inner-container">
                            <div className="admin-detail-number">4</div>
                            <div className="admin-details-text">Summary</div>
                        </div>
                    </div>
                </div>
                <div className="institution-name-type-container">
                    <div className="institution-name-coantainer">
                        <div className="institution-name-inner-conatiner">
                            <div className="institution-name-txt">Account Number</div>
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                      data-wf-page-id="66b49058a3813a8d342e39ad"
                                      data-wf-element-id="97573256-3d7e-a0b7-0951-3e50ddaa2cd4"><input
                                    className="text-field w-input" maxLength="256" name="field-4" data-name="Field 4"
                                    placeholder="2075975944" type="text" id="field-4" required=""/></form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                            <div className="slime-bank-block">Slime Microfinance Bank</div>
                        </div>
                    </div>
                    <div className="institution-name-coantainer">
                        <div className="institution-name-inner-conatiner">
                            <div className="institution-name-txt">Bank Code</div>
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                      data-wf-page-id="66b49058a3813a8d342e39ad"
                                      data-wf-element-id="97573256-3d7e-a0b7-0951-3e50ddaa2ce1"><input
                                    className="text-field w-input" maxLength="256" name="field-3" data-name="Field 3"
                                    placeholder="BC10239343" type="text" id="field-3" required=""/></form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="institution-name-type-container">
                    <div className="institution-name-coantainer">
                        <div className="institution-name-inner-conatiner">
                            <div className="institution-name-txt">Sort Code</div>
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                      data-wf-page-id="66b49058a3813a8d342e39ad"
                                      data-wf-element-id="97573256-3d7e-a0b7-0951-3e50ddaa2cef"><input
                                    className="text-field w-input" maxLength="256" name="field-3" data-name="Field 3"
                                    placeholder="42545" type="text" id="field-3" required=""/></form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cancel-next-step-container">
                    <div className="cance-nextstep-inner-container">
                        <a href="#" className="cancel-btn-add-partner w-button">Back</a>
                        <a href="#" className="next-step-btn w-button">Next Step</a>
                    </div>
                </div>
            </div>
        </>
    )
}