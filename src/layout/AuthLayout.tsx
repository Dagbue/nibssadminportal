
import nibbsLogo from "../assets/images/nibss_logo.png";
import {ReactNode} from "react";

export type LayoutType = {
    title?:string,
    subTitle: string,
    children: ReactNode
    authImg: string
}

export default function AuthLayout({children, title, subTitle, authImg, }:LayoutType){
    return(
        <>
            <main className="main-wrapper">
                <section className="section_login">
                    <div className="padding-global">
                        <div className="signup-component">
                            <div className="login_navbar">
                                <a href="#" className="login_logo-link w-nav-brand"><img src={nibbsLogo}
                                                                                         loading="lazy" width="100"
                                                                                         alt=""/></a>
                                {/*<div className="div-block">*/}
                                {/*    {authButton}*/}
                                {/*</div>*/}
                            </div>
                            <div className="signup-form-wrapper">
                                <div className="margin-bottom margin-medium">
                                    <div className="text-align-center">
                                        <div className="margin-bottom margin-small"><img src={authImg}
                                                                                         loading="lazy" alt=""/></div>
                                        <p className="text-size-medium">{title}</p>
                                        <p className="text-size-title">{subTitle}</p>
                                    </div>
                                </div>
                                <div className="login_form-block w-form">
                                    {children}
                                </div>


                            </div>
                            {/*<div className="login1_footer">*/}
                            {/*    <div className="text-size-small">© 2024 Nibss</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}