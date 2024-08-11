import {ChangeEvent, useRef} from "react";

type BaseOtpInputType = {
    numberOfField: number,
    className?: string,
    onChange?: (value: string)=>void,
    name:string,
    formik?: any
}
export const BaseOtpInput = ({numberOfField,className,onChange}:BaseOtpInputType) => {
    const inputRefs = useRef<(HTMLInputElement)[]>([]);
    function getValue(): string{
        let val = ""
        for (let i = 0; i < inputRefs.current.length; i++){
            val += inputRefs.current[i].value
        }
        return val
    }
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const pattern: RegExp = /^[A-Za-z\s!@#$%^&*(),.?":{}|<>]+$/;
        if (!pattern.test(event.target.value)){
            event.target.focus()
            const inputs = event.target.value.split('')
            inputRefs.current[index].value = inputs[inputs.length-1]
            inputRefs.current[index+1].focus()
            inputRefs.current[index+1].focus()
        }else{
            inputRefs.current[index].value=""
        }
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        // Prevent default behavior for backspace
        if (event.key === 'Backspace') {
            event.preventDefault();
            // setInputValue(inputValue)
            inputRefs.current[index-1].value = "";
            inputRefs.current[index].value = "";
            inputRefs.current[index-1].focus();
        }
    };
    const handleKeyUp = () => {
        onChange?.(getValue())
    };

    return (
        <>
            {[...Array(numberOfField)].map((_, index) =>
                <input type="numeric" onChange={(event)=>handleOnChange(event, index)}
                       inputMode="numeric"
                       ref={(ref) => {
                           inputRefs.current[index] = ref!;
                       }}
                       value={undefined}
                       onKeyDown={(event)=>handleKeyDown(event,index)}
                       onKeyUp={()=>handleKeyUp()}
                       maxLength={1}
                       className={className}
                       placeholder="-" min="0" max="9"/>)}
        </>
    )
}