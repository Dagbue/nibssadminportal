import * as Yup from 'yup';

export class AuthValidation {
    static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    static specialCharactersRegex = /^[a-zA-Z0-9 ]+$/;
    static initiateSignup = Yup.object().shape({
        customerFirstName: Yup.string().required("First Name Is Required.").matches(this.specialCharactersRegex, 'Special characters are not allowed'),
        customerEmail: Yup.string().matches(this.emailRegex,'Invalid email address').required("Email Is Required."),
        customerCountryCode: Yup.string().required("Country Code Is Required."),
        customerLastName: Yup.string().required("Last Name Is Required.").matches(this.specialCharactersRegex, 'Special characters are not allowed'),
        customerPhone: Yup.string().required("Phone Number Is Required.").min(10,"Invalid Phone Number").max(11,"Invalid Phone Number"),
    })
    static completeSignup = Yup.object().shape({
        //customerOtp: Yup.string().required("Otp Is Required."),
        customerConfirmPassword: Yup.string().equals([Yup.ref("customerPassword"), null], "Password Does Not Match").required("Confirm Password Is Required."),
        countryCode: Yup.string().required("Country Code Is Required."),
        customerPhone: Yup.string().required("Phone Number Is Required."),
        customerPassword: Yup.string().min(6, "Phone Must Not Be Less Than 6").max(6, "Phone Must Not Be Less Than 6").required("password Is Required."),
    })
    static otp = Yup.object().shape({
        //customerOtp: Yup.string().required("Otp Is Required.")
    })
    static initiatePasswordReset = Yup.object().shape({
        // countryCode: Yup.string().required("Country Code Is Required."),
        userEmail: Yup.string().required("Email Is Required."),
    })
    static completePasswordReset = Yup.object().shape({
        // customerOtp: Yup.string().required("Otp Is Required."),
        // customerConfirmPassword: Yup.string().required("New Password Is Required."),
        //userEmail: Yup.string().required("Email Is Required."),
        //otp: Yup.string().required("Otp Is Required."),
        userPassword: Yup.string().required("Password Is Required."),

        // customerPhone: Yup.string().required("Phone Number Is Required.")

        // countryCode: Yup.string().required("Country Code Is Required."),
        // customerPhone: Yup.string().required("Phone Number Is Required."),
        // customerPassword: Yup.string().min(6, "Phone Must Not Be Less Than 6").required("password Is Required."),
    })
    static login = Yup.object().shape({
        userEmail: Yup.string().required("Email Is Required."),
        userPassword: Yup.string().required("Password Is Required."),
        countryCode: Yup.string().required("Country Code Is Required."),
    })
    static changePassword = Yup.object().shape({
        oldPassword: Yup.string().required("Old Password Is Required."),
        userPassword: Yup.string().required("Password Is Required."),
        username: Yup.string().required("Name Is Required."),
    })
}