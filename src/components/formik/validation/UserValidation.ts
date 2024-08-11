import * as Yup from 'yup';

export class UserValidation {
    static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    static specialCharactersRegex = /^[a-zA-Z0-9 ]+$/;
    static create = Yup.object().shape({
        userName: Yup.string().required("Name Is Required.").matches(this.specialCharactersRegex, 'Special characters are not allowed'),
        userEmail: Yup.string().matches(this.emailRegex,'Invalid email address').required("Email Is Required."),
        //customerCountryCode: Yup.string().required("Country Code Is Required."),
        //customerLastName: Yup.string().required("Last Name Is Required."),//.matches(this.specialCharactersRegex, 'Special characters are not allowed'),
        userMobileNumber: Yup.string().required("Phone Number Is Required."),//.min(10,"Invalid Phone Number").max(11,"Invalid Phone Number"),
        userStaffPersonalNumber: Yup.string().required("Staff Personal Number Is Required.")//.min(10,"Invalid Phone Number").max(11,"Invalid Phone Number"),
    })
}