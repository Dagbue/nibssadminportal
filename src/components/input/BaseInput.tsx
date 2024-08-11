import {ReactSVG} from "react-svg";
import React, {InputHTMLAttributes} from "react";
import {RotatingLines} from "react-loader-spinner";

type BaseInputProps = {
    labelStyle?:  React.CSSProperties,
    inputStyle?:  React.CSSProperties,
    errorStyle?:  React.CSSProperties,
    error?: any,
    items?: { value:any, label: any }[],
    label?: string,
    formik?: any,
    loading?: boolean,
    leftIcon?: ReactSVG
}
export const BaseInput = ({labelStyle, inputStyle, errorStyle, formik, leftIcon, style, error,  items, label,loading, ...props}: BaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {

    errorStyle = errorStyle?errorStyle:{}
    inputStyle = inputStyle?inputStyle:{}
    if (formik.errors[props.name!] && formik.touched[props.name!]) inputStyle['borderColor'] = errorStyle['color']
    return(
        <>
            <label style={labelStyle} htmlFor={props.id}>{label}</label>
            {(props.type === 'submit' && loading) &&
                <p style={{margin: 'auto', marginTop: '57px'}}>
                <RotatingLines
                    visible={true}
                    // height="30"
                    width="30"
                    // color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    // wrapperStyle={{}}
                    // wrapperClass=""
                />
                </p>
            }
            {
                !(props.type === 'submit' && loading) &&
                <input
                    value={formik.values[props.name!]}
                    onBlur={formik.handleBlur(props.name)}
                    onChange={formik.handleChange(props.name)}
                    style={{...inputStyle}}
                    {...props}
                />
            }
            {/*<select*/}
            {/*    value={formik.values[props.name!]}*/}
            {/*    onBlur={formik.handleBlur(props.name)}*/}
            {/*    onChange={formik.handleChange(props.name)}*/}
            {/*    style={{...inputStyle}}*/}
            {/*    {...props}*/}
            {/*/>*/}
            {/*<select*/}
            {/*    onChange={formik.handleChange(props.name)}*/}
            {/*    onBlur={formik.handleBlur(props.name)}*/}
            {/*    style={{...inputStyle}}*/}
            {/*    {...props}*/}
            {/*>*/}
            {/*    <option value={undefined}>Select User</option>*/}
            {/*    {userState.users.map(*/}
            {/*        item => <option key={item.userId} value={item.userId}>{item.userName}</option>*/}
            {/*    )}*/}
            {/*</select>*/}

            {
                formik.errors[props.name!] && formik.touched[props.name!] && (
                    <p style={errorStyle}> {formik.errors[props.name!]} </p>
                )
            }
        </>
    )
}