import * as Yup from 'yup';

export class ProfileValidation {
    static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    static specialCharactersRegex = /^[a-zA-Z0-9 ]+$/;
    static update = Yup.object().shape({
        userName: Yup.string().required("First Name Is Required.").matches(this.specialCharactersRegex, 'Special characters are not allowed'),
        // userLastName: Yup.string().required("Last Name Is Required.").matches(this.specialCharactersRegex, 'Special characters are not allowed'),
        // userMiddleName: Yup.string().required("Middle Name Is Required.").matches(this.specialCharactersRegex, 'Special characters are not allowed'),
        userPassword: Yup.string().required("Password Is Required."),
        // userHeaderImage: Yup.string().required("Header Image Is Required."),
        // userPin: Yup.string().required("Pin Is Required."),
        userMobileNumber: Yup.string().required("Phone Number Is Required."),

        userEmail: Yup.string().matches(this.emailRegex,'Invalid email address').required("Email Is Required."),
        // userStaffPersonalNumber: Yup.string().required("Staff Personal Number Is Required."),
        // userId: Yup.string().required("UserId Is Required."),
        // userStatus: Yup.string().required("Status Is Required."),
        // userBranchId: Yup.string().required("BranchId Is Required."),
        // userRoleId: Yup.string().required("RoleId Is Required."),


        // userDob: Yup.string().required("Dob Is Required."),
        // taskStartDate: Yup.string().required("Start Date Is Required.")
    })
}