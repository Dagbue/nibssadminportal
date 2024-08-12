
import deleteImg from "../../assets/images/Frame-1618868406.svg"


export default function DeletePartnerModal (){
    return (
        <>
            <div className="delete-modal-container delete-partner">
                <div className="delete-modal-header"><img src= {deleteImg} loading="lazy" alt=""
                                                          className="image-32"/>
                    <div className="delete-modal-header-content">
                        <div className="delet-modal-text-top">Delete Partner</div>
                        <div className="delete-modal-header-btm">Are you sure you want to delete this partner?</div>
                    </div>
                </div>
                <div className="cancel-confirm-btn-container">
                    <div className="cancel-confirm-inner-container">
                        <a href="#" className="cancel-btn-delete-modal w-button">Cancel</a>
                        <a href="#" className="confirm-btn-delete-modal delete-btn-delete-modal w-button">Delete</a>
                    </div>
                </div>
            </div>
        </>
    )
}