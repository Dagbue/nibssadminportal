import adduserImg from "../../assets/images/user-add-line.svg"
import linearImg from "../../assets/images/linear.svg"
// import discordicon from "../../assets/images/discord.svg"
import zapiericon from "../../assets/images/zapier.svg"
// import notionicon from "../../assets/images/notion.svg"
import zendeskicon from "../../assets/images/zendesk.svg"
import dropboxicon from "../../assets/images/dropbox.svg"
import jiraicon from "../../assets/images/jira.svg"
import githubicon from "../../assets/images/github.svg"

export default function Integrations (){

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
                <div className="intergration-apps-container">
                    <div className="linear-zapier-conatiner">
                        <div className="linear-zap-inner-container">
                            <div className="linear-app-check-container">
                                <figure className="linear-icon-text-box">
                                    <div className="linear-icon"><img src={linearImg} loading="lazy" alt=""/>
                                    </div>
                                    <div className="text-block-3">Linear</div>
                                </figure>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                          className="form-8" data-wf-page-id="66b4a09f8b32d6b0f96b65ea"
                                          data-wf-element-id="990596e9-3775-1678-e225-4adc6308d28c"><label
                                        className="w-checkbox checkbox-field-9">
                                        <div
                                            className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-9"></div>
                                        <input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2"
                                               style={{
                                                   opacity: 0,
                                                   position: 'absolute',
                                                   zIndex: -1,
                                               }}/><span
                                        className="checkbox-label-7 w-form-label" htmlFor="checkbox-2"></span>
                                    </label></form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="linear-zap-inner-container">
                            <div className="linear-app-check-container">
                                <figure className="linear-icon-text-box">
                                    <div className="linear-icon"><img src={zendeskicon} loading="lazy" alt=""/>
                                    </div>
                                    <div className="text-block-3">Zendesk</div>
                                </figure>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                          className="form-8" data-wf-page-id="66b4a09f8b32d6b0f96b65ea"
                                          data-wf-element-id="990596e9-3775-1678-e225-4adc6308d28c"><label
                                        className="w-checkbox checkbox-field-9">
                                        <div
                                            className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-9"></div>
                                        <input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2"
                                               style={{
                                                   opacity: 0,
                                                   position: 'absolute',
                                                   zIndex: -1,
                                               }}/><span
                                        className="checkbox-label-7 w-form-label" htmlFor="checkbox-2"></span>
                                    </label></form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="linear-zap-inner-container">
                            <div className="linear-app-check-container">
                                <figure className="linear-icon-text-box">
                                    <div className="linear-icon"><img src={githubicon} loading="lazy" alt=""/>
                                    </div>
                                    <div className="text-block-3">Github</div>
                                </figure>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                          className="form-8" data-wf-page-id="66b4a09f8b32d6b0f96b65ea"
                                          data-wf-element-id="990596e9-3775-1678-e225-4adc6308d28c"><label
                                        className="w-checkbox checkbox-field-9">
                                        <div
                                            className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-9"></div>
                                        <input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2"
                                               style={{
                                                   opacity: 0,
                                                   position: 'absolute',
                                                   zIndex: -1,
                                               }}/><span
                                        className="checkbox-label-7 w-form-label" htmlFor="checkbox-2"></span>
                                    </label></form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="linear-zap-inner-container">
                            <div className="linear-app-check-container">
                                <figure className="linear-icon-text-box">
                                    <div className="linear-icon"><img src={zapiericon} loading="lazy" alt=""/>
                                    </div>
                                    <div className="text-block-3">Zapier</div>
                                </figure>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                          className="form-8" data-wf-page-id="66b4a09f8b32d6b0f96b65ea"
                                          data-wf-element-id="990596e9-3775-1678-e225-4adc6308d28c"><label
                                        className="w-checkbox checkbox-field-9">
                                        <div
                                            className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-9"></div>
                                        <input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2"
                                               style={{
                                                   opacity: 0,
                                                   position: 'absolute',
                                                   zIndex: -1,
                                               }}/><span
                                        className="checkbox-label-7 w-form-label" htmlFor="checkbox-2"></span>
                                    </label></form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="linear-zap-inner-container">
                            <div className="linear-app-check-container">
                                <figure className="linear-icon-text-box">
                                    <div className="linear-icon"><img src={jiraicon} loading="lazy" alt=""/>
                                    </div>
                                    <div className="text-block-3">Atlassian JIRA</div>
                                </figure>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                          className="form-8" data-wf-page-id="66b4a09f8b32d6b0f96b65ea"
                                          data-wf-element-id="990596e9-3775-1678-e225-4adc6308d28c"><label
                                        className="w-checkbox checkbox-field-9">
                                        <div
                                            className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-9"></div>
                                        <input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2"
                                               style={{
                                                   opacity: 0,
                                                   position: 'absolute',
                                                   zIndex: -1,
                                               }}/><span
                                        className="checkbox-label-7 w-form-label" htmlFor="checkbox-2"></span>
                                    </label></form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="linear-zap-inner-container">
                            <div className="linear-app-check-container">
                                <figure className="linear-icon-text-box">
                                    <div className="linear-icon"><img src={dropboxicon} loading="lazy" alt=""/>
                                    </div>
                                    <div className="text-block-3">Dropbox</div>
                                </figure>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                          className="form-8" data-wf-page-id="66b4a09f8b32d6b0f96b65ea"
                                          data-wf-element-id="990596e9-3775-1678-e225-4adc6308d28c"><label
                                        className="w-checkbox checkbox-field-9">
                                        <div
                                            className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-9"></div>
                                        <input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2"
                                               style={{
                                                   opacity: 0,
                                                   position: 'absolute',
                                                   zIndex: -1,
                                               }}/><span
                                        className="checkbox-label-7 w-form-label" htmlFor="checkbox-2"></span>
                                    </label></form>
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
                </div>
                <div className="cancel-next-step-container">
                    <div className="cance-nextstep-inner-container">
                        <a href="#" className="cancel-btn-add-partner w-button">Cancel</a>
                        <a href="#" className="next-step-btn w-button">Next Step</a>
                    </div>
                </div>
            </div>
        </>

    )
}