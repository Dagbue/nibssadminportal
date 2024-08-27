
import userIcon from "../../assets/images/Frame-1618868326-9.svg"

export default function ChangeUserRoleModal (){
    return (
        <>
            <div className="delete-modal-container">
                <div className="delete-modal-header"><img src= {userIcon} loading="lazy" alt=""
                                                          className="image-32"/>
                    <div className="delete-modal-header-content">
                        <div className="delet-modal-text-top">Change User Role</div>
                        <div className="delete-modal-header-btm">Are you sure you want to make this user an admin?</div>
                    </div>
                </div>
                <div className="user-admin-delete-conatiner">
                    <div className="user-admin-inner-container">
                        <div className="user-radio-delete-option">
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                      data-wf-page-id="66b09da5bfd4af52ef08d133"
                                      data-wf-element-id="9d6e1770-a0b6-c72d-1063-e98d4b04e27d"><label
                                    className="radio-button-field w-radio">
                                    <div
                                        className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button-3 w-radio-input"></div>
                                    <input type="radio" data-name="Radio" id="radio" name="radio"
                                           style={{opacity:"0",position:"absolute", zIndex:"-1"}} value="Radio"/><span
                                    className="radio-button-label-2 w-form-label" >User</span>
                                </label></form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                        <div className="admin-radio-delete-option">
                            <div className="w-form">
                                <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get"
                                      data-wf-page-id="66b09da5bfd4af52ef08d133"
                                      data-wf-element-id="f4bb55cd-730a-3a68-518e-75e92f4c7fb3"><label
                                    className="radio-button-field-2 w-radio">
                                    <div
                                        className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button-4 w-radio-input"></div>
                                    <input type="radio" name="Radio-2" id="radio-2" data-name="Radio 2"
                                           style={{opacity:"0",position:"absolute", zIndex:"-1"}} value="Radio 2"/><span
                                    className="radio-button-label-3 w-form-label" >Admin</span>
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
                <div className="cancel-confirm-btn-container">
                    <div className="cancel-confirm-inner-container">
                        <a href="#" className="cancel-btn-delete-modal w-button">Cancel</a>
                        <a href="#" className="confirm-btn-delete-modal w-button">Confirm</a>
                    </div>
                </div>
            </div>
        </>
    )
}