import adduserImg from "../../assets/images/user-add-line.svg"


export default function RoutingNumber (){
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
                <div className="institution-name-type-container routing-number">
                    <div className="institution-name-coantainer routing-number">
                        <div className="institution-name-inner-conatiner">
                            <div className="institution-name-txt">Routing Number</div>
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                      data-wf-page-id="66b49e59929be7446555a85a"
                                      data-wf-element-id="5af55e87-11cd-3d83-c5af-eba21fca0db3"><input
                                    className="text-field w-input"  name="field-4" data-name="Field 4"
                                    placeholder="Input routing number" type="text" id="field-4" /></form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                            <div className="slime-bank-block">United Bank of Africa</div>
                        </div>
                    </div>
                </div>
                <div className="institution-name-type-container"></div>
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