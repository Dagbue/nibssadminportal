import userIcon from "../../assets/images/Frame-1618868326-9.svg"


export default function AddUserModal (){
    return (
        <>
            <div className="add-user-modal-container">
                <div className="delete-modal-header add-user"><img src= {userIcon}loading="lazy"
                                                                   alt="" className="image-32"/>
                    <div className="delete-modal-header-content">
                        <div className="delet-modal-text-top">Add User</div>
                        <div className="delete-modal-header-btm">Add a use to a partner account</div>
                    </div>
                </div>
                <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get"
                          className="add-user-form" data-wf-page-id="66b0d4be3d9857c6eb407cc6"
                          data-wf-element-id="430f206a-f62a-5f5d-7edd-dec86857bdac"><label htmlFor="name-4">First
                        Name</label><input className="text-field-4 w-input" maxLength="256" name="name-4"
                                           data-name="Name 4" placeholder="Name of Institution" type="text"
                                           id="name-4"/><label htmlFor="name-4">Last Name</label><input
                        className="text-field-4 w-input" maxLength="256" name="name-2" data-name="Name 2"
                        placeholder="Name of Institution" type="text" id="name-2"/><label htmlFor="name-4">Email</label><input
                        className="text-field-4 w-input" maxLength="256" name="name-3" data-name="Name 3"
                        placeholder="Provide admin email" type="email" id="name-3" required=""/><label htmlFor="field-2"
                                                                                                       className="field-label">Role</label><select
                        id="field-2" name="field-2" data-name="Field 2" className="select-field-5 w-select">
                        <option value="">Select Role</option>
                        <option value="First">Admin</option>
                        <option value="Second">User</option>
                    </select></form>
                    <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
                <div className="cancel-confirm-btn-container add-user-cancel-btn">
                    <div className="cancel-confirm-inner-container">
                        <a href="#" className="cancel-btn-delete-modal w-button">Cancel</a>
                        <a href="#" className="confirm-btn-delete-modal w-button">Confirm</a>
                    </div>
                </div>
            </div>
        </>
    )
}