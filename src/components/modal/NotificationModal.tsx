import successImg from "../../assets/images/success-gif.gif"
import errorImg from "../../assets/images/error-warning-fill.svg"
import { NotificationState} from "../../store/modules/notification.ts";
import {useSelector} from "react-redux";

export type NotificationModalType={
    show?: boolean
    onClose?: () => void
    type: 'error' | 'success'
    title: string
    body: string
    proceedButton: string

}
export default function NotificationModal({onClose,title,body, proceedButton,show}:NotificationModalType){
    const notificationState = useSelector<any>((state)=> state.notification) as NotificationState

    return(
        <>
            {show && <div className={"success-modal-container"}>
                <div className="modal-overlay">
                    <div className="success-modal-wrapper">

                        {notificationState.modal.type === "error" ? <div className={"success-modal-img"}>
                            <img src={errorImg} width={70} height={70}/>
                        </div> : <div className={"success-modal-img"}>
                            <img src={successImg} width={70} height={70}/>
                        </div>}
                        <div className={"success-modal-text"}>
                            <p className={"modal-title"}>{title}</p>
                            <p className={"modal-body"}>{body}</p>
                            <button onClick={onClose} className={"continue-btn"}>
                                {proceedButton}
                            </button>

                        </div>

                    </div>

                </div>
            </div>
            }


        </>
    )
}