// import {useFormik} from "formik";
// import {AuthValidation} from "./validation/AuthValidation.ts";
// import {BaseInput} from "../input/BaseInput.tsx";
// import {useDispatch, useSelector} from "react-redux";
// import {auth, AuthState} from "../../store/modules/auth.ts";
// import {InitiateLoginRequest, InitiateLoginRequestInit} from "../../model/request/auth/InitiateLoginRequest.ts";
// import emailImg from "../../assets/images/mail-icon.png"
// import passwordImg from "../../assets/images/padlock-icon.png"
// import {AppDispatch} from "../../store/modules";
// import {application} from "../../store/modules/application.ts";
// // import {UserState} from "../../store/modules/user.ts";
// // import {io} from "socket.io-client";
// // import ReconnectingWebSocket from "reconnecting-websocket";
// // const headers = {
// //     Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiaWJpb3l1Z2JvQGdtYWlsLmNvbSIsInByaXZpbGVnZXMiOlsiIl0sInVzZXJVcGRhdGVkQXQiOiIyMDI0LTAzLTIyIDE0OjEzOjE5LjEyMyIsInVzZXJTdGF0dXMiOiJBQ1RJVkUiLCJ1c2VyQ3JlYXRlZEF0IjoiMjAyNC0wMy0wNCAxMjoxNzo1MC4xNjMiLCJ1c2VyTmFtZSI6ImJpYmkgb3l1Z2JvIGNocmlzdGluZSIsInVzZXJJZCI6MTE5LjAsInVzZXJTdGFmZlBlcnNvbmFsTnVtYmVyIjoiOTA1NTY1NTU1NSIsInJlc3BvbnNlQ29kZSI6IjAwIiwidXNlclBpbiI6IjEyMzQ1NiIsInVzZXJFbWFpbCI6ImJpYmlveXVnYm9AZ21haWwuY29tIiwidXNlclJvbGVJZCI6MTAwLjAsInVzZXJNb2JpbGVOdW1iZXIiOiI5MDAwMDAwNjY3IiwicmVzcG9uc2VNZXNzYWdlIjoiQ29tcGxldGVkIHN1Y2Nlc3NmdWxseSIsImlhdCI6MTcxNDU3NTIwNywiZXhwIjoxNzE0NTc4ODA3fQ.NofylGtSB6zMkqw2HZxwxPPSLRitQG4mbTyGIOMDzuK3TzyTpo8nt51AC0-v_Qj9V9p0CBej9A9nWgOd20UVPw'
// //     // Add other headers as needed
// // };
// // const socket = io('wss://g8uk3d0ltd.execute-api.eu-west-1.amazonaws.com',
// //     {
// //         path: '/dev',
// //         transports: ['websocket', 'polling', 'flashsocket'],
// //         upgrade: true,
// //         extraHeaders:headers
// //     })
//
// export function LoginForm(){
//     const authState = useSelector<any>((state)=> state.auth) as AuthState
//     const dispatch = useDispatch<AppDispatch>();
//
//     // const userState = useSelector<any>((state)=> state.auth) as UserState
//
//
//     // function gotoDashboard() {
//     //     navigate(RouteConstant.auth.initiateLogin.path)
//     // }
//     // const showMessage = (response: any) => {
//     //     StoreUtil.execute(
//     //         () => dispatch(notification.mutation.openModal({type:'error',title:'Error', body:response.responseMessage, proceedButton:"Proceed"}))
//     //     )
//     // }
//
//     // const handleSubmit = async (value:InitiateLoginRequest)=>{
//     //
//     //     // value.userPassword = userState.profileUpdateInfo.userPassword
//     //
//     //
//     //     // dispatch<any>(notification.mutation.openModal({type:'error',title:'Error', body:'response.responseMessage'}))
//     //     // await dispatch(auth.action.initiateLogin({
//     //     //     data:value,
//     //     //     onSuccess:()=>gotoDashboard(),
//     //     //     onError:(response: any)=> showMessage(response)
//     //     // }))
//     // }
//     const handleSubmit = async (value:InitiateLoginRequest)=>{
//         dispatch(auth.mutation.setLoginInfo(formik.values))
//         localStorage.userEmail = formik.values.userEmail
//         console.log(authState.loginInfo)
//
//         await dispatch(application.action.readApp({
//             data:value,
//             onSuccess:()=>console.log("hi"),
//             onError:()=> console.log("hi")
//         }))
//     }
//
//     const formik = useFormik({
//         onSubmit: handleSubmit,
//         initialValues: InitiateLoginRequestInit,
//         validationSchema: AuthValidation.login
//     })
//
//     return (
//         <>
//             <form onSubmit={formik.handleSubmit}>
//                 <BaseInput
//                     type={"text"}
//                     formik={formik}
//                     label={"Email Address"}
//                     name={"userEmail"}
//                     className={"email-input"}
//                     errorStyle={{color: 'red'}}
//                     style={{paddingLeft: "38px"}}
//                     autoComplete={"off"}
//                 />
//                 <BaseInput
//                     type={"password"}
//                     label={"Password"}
//                     formik={formik}
//                     name={"userPassword"}
//                     className={"email-input"}
//                     errorStyle={{color: 'red'}}
//                     style={{paddingLeft: "38px"}}
//                     autoComplete={"off"}
//                 />
//                 <div className={"checkbox"}>
//                     <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
//                     <label htmlFor="vehicle1">I agree to
//                         the <span>Terms of Service</span> and <span>Privacy Policy</span></label><br/>
//
//                 </div>
//                 {/*<label className={"login-btn"}>*/}
//                     <BaseInput
//                         type={"submit"}
//                         formik={formik}
//                         name={"Login"}
//                         loading={authState.loading}
//                         className={"login-btn"}
//                     />
//                 {/*</label>*/}
//
//
//             </form>
//             <div className={"email-img"}><img src={emailImg}/></div>
//             <div className={"password-img"}><img src={passwordImg}/></div>
//         </>
//     )
//
// }