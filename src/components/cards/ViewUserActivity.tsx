
import monitorImg from "../../assets/images/monitor-04.svg"
import greendot from "../../assets/images/_Dot.svg"
import avatarprofilePhoto from "../../assets/images/Avatar-profile-photo.svg"
import circlepointerImg from "../../assets/images/Frame-1618868406-1.svg"


export default function ViewUserActivity (){
    return (
        <>
            <div className="user-details-body-container">
                <div className="user-details-header-box">
                    <div className="user-details-icon"><img src= {circlepointerImg} loading="lazy"
                                                            alt=""/></div>
                    <div className="user-details-header-text">User Details</div>
                </div>
                <div className="user-detail-content">
                    <div className="user-detail-page-header">
                        <div className="active-now-image-wrap">
                            <div className="activ-now-container">
                                <div className="active-indicator-box"><img src={greendot} loading="lazy"
                                                                           alt="" className="image-33"/></div>
                                <div className="active-now-text">Active now</div>
                            </div>
                            <div className="user-info-inner-header">
                                <div className="deleteuser-display-avatar"><img src={avatarprofilePhoto}
                                                                                loading="lazy" alt=""/></div>
                                <div className="name-email-export-delete">
                                    <div className="namemail-exportdelete-inner-box">
                                        <div className="name-email-head-container">
                                            <div className="name-head-text">Sinclair Thompson</div>
                                            <div className="email-text-header">sinclair@gmail.com</div>
                                        </div>
                                        <div className="export-deleteuser-container">
                                            <a href="#" className="export-btn-delete-user w-button">Export</a>
                                            <a href="#" className="delete-user-btn w-button">Delete User</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-tab-edit-container">
                        <div className="userdetails-activity-tab">
                            <div className="user-details-tab">User details</div>
                            <div className="user-activity-tab">User activity</div>
                        </div>
                    </div>
                    <div className="user-activity-location">
                        <div className="icon-text-device-container">
                            <div className="device-icon-box"><img src={monitorImg} loading="lazy" alt=""/>
                            </div>
                            <div className="device-info-text-container">
                                <div className="publish-ussd-menu-txt">Publish USSD menu</div>
                                <div className="device-loation-date">Lagos, Nigeria • 22 Jan at 10:40am</div>
                            </div>
                        </div>
                        <div className="icon-text-device-container">
                            <div className="device-icon-box"><img src={monitorImg} loading="lazy" alt=""/>
                            </div>
                            <div className="device-info-text-container">
                                <div className="publish-ussd-menu-txt">Publish USSD menu</div>
                                <div className="device-loation-date">Lagos, Nigeria • 22 Jan at 10:40am</div>
                            </div>
                        </div>
                        <div className="icon-text-device-container">
                            <div className="device-icon-box"><img src={monitorImg} loading="lazy" alt=""/>
                            </div>
                            <div className="device-info-text-container">
                                <div className="publish-ussd-menu-txt">Publish USSD menu</div>
                                <div className="device-loation-date">Lagos, Nigeria • 22 Jan at 10:40am</div>
                            </div>
                        </div>
                        <div className="icon-text-device-container">
                            <div className="device-icon-box"><img src={monitorImg} loading="lazy" alt=""/>
                            </div>
                            <div className="device-info-text-container">
                                <div className="publish-ussd-menu-txt">Publish USSD menu</div>
                                <div className="device-loation-date">Lagos, Nigeria • 22 Jan at 10:40am</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="delete-user-page-footer"></div>
            </div>
        </>
    )
}