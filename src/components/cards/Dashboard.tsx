
import TotalAppsImg from "../../assets/images/Frame-1618868316.svg"
import RandomPattern from "../../assets/images/Group-2.svg"
import TotalAPIImg from "../../assets/images/Frame-1618868316-1.svg"
import  TotalUsersImg from "../../assets/images/Frame-1618868316-2.svg"
import EmptyStatesImg from "../../assets/images/Empty-States.svg"
import {useEffect} from "react";
import {AppDispatch, useAppDispatch} from '../../store/modules'; // Adjust the import path
import {application} from "../../store/modules/application.ts";
import {useDispatch} from "react-redux";

export type ActionType<T> = {
    data: T;
    onSuccess?: (payload?: any) => void;
    onError?: (payload?: any) => void;
};
// export type AppDispatch = typeof store.dispatch;

export default function DashboardEmptyState(){


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(application.action.readApp({})); // Adjust the payload if needed
    }, [dispatch]);



    return(
        <>
            <div className={"dashboard-card-container"}>
                <div className="app-api-user-container">
                    <div className="total-app-container">
                        <div className="app-icon-text icon-text-sm">
                            <div className="app-icon-img"><img src= {TotalAppsImg} loading="lazy"

                                                               width="30"
                                                               alt="" className="img-smm"/></div>
                            <div className="app-icon-txt-container">
                                <div className="app-icon-txt-top text-shrink t-sm">TOTAL APPS</div>
                                <div className="app-api-user-nmb">0</div>
                            </div>
                        </div>
                        <div className="app-api-user-decoration"><img src= {RandomPattern} loading="lazy" alt=""
                                                                      className="image-9 img-9 edit-img edit-img2"/>
                        </div>
                    </div>
                    <div className="total-app-container">
                        <div className="app-icon-text icon-text-sm">
                            <div className="app-icon-img"><img src= {TotalAPIImg} loading="lazy"
                                                               width="31"
                                                               alt="" className="img-smm"/></div>
                            <div className="app-icon-txt-container">
                                <div className="app-icon-txt-top text-shrink t-sm">TOTAL API</div>
                                <div className="app-api-user-nmb">0</div>
                            </div>
                        </div>
                        <div className="app-api-user-decoration"><img src= {RandomPattern} loading="lazy" alt=""
                                                                      className="image-9 img-9 edit-img edit-img2"/>
                        </div>
                    </div>
                    <div className="total-app-container">
                        <div className="app-icon-text icon-text-sm">
                            <div className="app-icon-img"><img src= {TotalUsersImg}loading="lazy"
                                                               width="31"
                                                               alt="" className="img-smm"/></div>
                            <div className="app-icon-txt-container">
                                <div className="app-icon-txt-top text-shrink t-sm">TOTAL USERS</div>
                                <div className="app-api-user-nmb">0</div>
                            </div>
                        </div>
                        <div className="app-api-user-decoration"><img src= {RandomPattern} loading="lazy" alt=""
                                                                      className="image-9 img-9 edit-img edit-img2"/>
                        </div>
                    </div>
                </div>
                <div className="createapp-container createapp-sm">
                    <div className="createapp-inner-container inner-container-sm">
                        <div className="createapp-img"><img src= {EmptyStatesImg} loading="lazy" alt=""/>
                        </div>
                        <div className="createapp-txt-btn-container">
                            <div className="createapp-txt-container">
                                <div className="createapp-top-txt">Whoops.. you&#x27;ve got no App</div>
                                <div  className="div-block-5">Start by creating your very first app</div>
                            </div>
                            <div className="green-btn empty-state-green-btn w-embed">
                                <button className="dashboard-create" style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "12px",
                                    padding: "12px 6px",
                                    height: "35px",
                                    backgroundColor: "#356D00",
                                    color: "currentColor",
                                    width: "142px",
                                    borderRadius: "12px",
                                    boxShadow: "0px 1px 3px 0px #f6f8fa",
                                    outline: "none",
                                    marginTop: "15px",
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 20 21"
                                         fill="none">
                                        <path
                                            d="M9.16675 9.71558V4.71558H10.8334V9.71558H15.8334V11.3822H10.8334V16.3822H9.16675V11.3822H4.16675V9.71558H9.16675Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    Create App
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}