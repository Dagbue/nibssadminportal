import {ReactSVG} from "react-svg";
import React, {SelectHTMLAttributes} from "react";

type BaseSelectProps = {
    labelStyle?:  React.CSSProperties,
    inputStyle?:  React.CSSProperties,
    errorStyle?:  React.CSSProperties,
    error?: any,
    items?: { value:any, label: any }[],
    label?: string,
    formik?: any,
    leftIcon?: ReactSVG
}
export const BaseSelect = ({labelStyle, inputStyle, errorStyle, formik, leftIcon, style, error,  items, label, ...props}: BaseSelectProps & SelectHTMLAttributes<HTMLSelectElement>) => {

    errorStyle = errorStyle?errorStyle:{}
    inputStyle = inputStyle?inputStyle:{}
    if (formik.errors[props.name!] && formik.touched[props.name!]) inputStyle['borderColor'] = errorStyle['color']
    return(
        <>
            <label style={labelStyle} htmlFor={props.id}>{label}</label>
            {
                <select
                    value={formik.values[props.name!]}
                    onBlur={formik.handleBlur(props.name)}
                    onChange={formik.handleChange(props.name)}
                    style={{...inputStyle}}
                    {...props}
                >
                    {items?.map(
                        item => <option key={item.value} value={item.value}>{item.label}</option>
                    )}
                </select>
            }
            {
                formik.errors[props.name!] && formik.touched[props.name!] && (
                    <p style={errorStyle}> {formik.errors[props.name!]} </p>
                )
            }
        </>
    )
}