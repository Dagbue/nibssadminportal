


export default function AddPartnerBillingDetails (){
    return (
        <>
            <div className="add-parthner-modal-body">
                <div className="add-partner-her-container">
                    <div className="partner-avater-icon"><img src="../images/user-add-line.svg" loading="lazy" alt=""/>
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
                                      data-wf-page-id="66b48d1322e2c4983254b16e"
                                      data-wf-element-id="6dc17701-e431-1c13-1de7-a2c1d8aaaea2"><input
                                    className="text-field w-input" maxLength="256" name="field-4" data-name="Field 4"
                                    placeholder="Input account number" type="text" id="field-4" required=""/></form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="institution-name-coantainer">
                        <div className="institution-name-inner-conatiner">
                            <div className="institution-name-txt">Bank Code</div>
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                      data-wf-page-id="66b48d1322e2c4983254b16e"
                                      data-wf-element-id="29d7ee3c-04b9-c9a9-76e9-8a68ccc7f1f2"><input
                                    className="text-field w-input" maxLength="256" name="field-3" data-name="Field 3"
                                    placeholder="Insert bank code" type="text" id="field-3" required=""/></form>
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
                                      data-wf-page-id="66b48d1322e2c4983254b16e"
                                      data-wf-element-id="6dc17701-e431-1c13-1de7-a2c1d8aaaebd"><input
                                    className="text-field w-input" maxLength="256" name="field-3" data-name="Field 3"
                                    placeholder="Input sort code" type="text" id="field-3" required=""/></form>
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