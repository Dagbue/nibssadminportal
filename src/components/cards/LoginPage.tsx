
// import {LoginForm} from "../formik/LoginForm.tsx";



export default function LoginPage(){
    return(
        <>
            <main className="main-wrapper">
                <section className="section_login">
                    <div className="padding-global">
                        <div className="login_component">
                            <div className="login_navbar">
                                <div className="login_logo-link w-nav-brand">

                                </div>
                            </div>
                            <div className="login-form-wrapper align-center">
                                <div className="margin-bottom margin-medium">
                                    <div className="text-align-center">
                                        <div className="margin-bottom margin-small">
                                        </div>
                                        <p className="text-size-medium">Login to your account</p>
                                        <p className="text-size-title">Enter your details to login.</p>
                                    </div>
                                </div>
                                {/*<LoginForm/>*/}
                            </div>
                            <div className="login1_footer">
                                <div className="text-size-small">© 2024 Nibss</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}