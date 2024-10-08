// import greenRectangle from "../../assets/images/Rectangle 2.png";
// import greenArrow from "../../assets/images/arrow-right-s-line.png";
import {NavLink, NavLinkProps} from "react-router-dom";
import * as React from "react";
import {useState} from "react";

type BaseNavLinkType = {
    children: string
    leftIcon?: string
    whiteIcon?: string
    isClicked?: boolean

} & NavLinkProps  & React.HTMLAttributes<HTMLAnchorElement>


export function BaseNavLink({children,...props}: BaseNavLinkType ) {

    const [isActive, setIsActive] = useState<boolean>(false)
    console.log(isActive)
    const [isHovered, setIsHovered] = useState(false);

    const activeState = ({ isActive  }:any) => {
        setIsActive(isActive)
        return {

            // color: isPending ? "rgb(253 230 138)" : "",
            color: props.isClicked ? "#356D00" : "rgba(157, 157, 158, 1)",
            backgroundColor: props.isClicked ? "#F6F8FA" : "",
            borderRadius:"12px"
            // fontWeight: isClicked ? "bold" : ""
        };
    };

    return (
        <NavLink style={activeState} {...props} className={"dashboard-whole"} onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
            {props.isClicked?
                <div className={"admin-other"}>
                    {props.leftIcon ?
                        <div className={"dashboard-content"}>
                            <div className={"dashboard-content-left"}>
                                <div><img src={props.whiteIcon}/></div>
                                <div className={"arrow-style"}>
                                    <div className={"user"}>{children}</div>
                                </div>
                            </div>
                        </div> : <div className={"dashboard-content"}>
                            <div className={"user"}>{children}</div>
                        </div>}
                </div> :
                <div>

                    {isHovered ? <div className={"admin-other"}>
                            {props.leftIcon ?
                                <div className={"dashboard-content"}>
                                    <div className={"dashboard-content-left"}>
                                        <div><img src={props.whiteIcon}/></div>
                                        <div className={"arrow-style"}>
                                            <div className={"user"}>{children}</div>
                                        </div>
                                    </div>
                                </div> : <div className={"dashboard-content"}>
                                    <div className={"user"}>{children}</div>
                                </div>}
                        </div>:
                        <div className={"dashboard-content"}>
                            <div className={"dashboard-content-left"}>
                                <img src={props.leftIcon}/>
                                <div className={"user"}>{children}</div>
                            </div>
                        </div>
                    }

                </div>
            }


        </NavLink>
    )
}