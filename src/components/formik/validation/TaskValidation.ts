import * as Yup from 'yup';

export class TaskValidation {
    static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    static specialCharactersRegex = /^[a-zA-Z0-9 ]+$/;
    static create = Yup.object().shape({
        taskName: Yup.string().required("Task Name Is Required.").matches(this.specialCharactersRegex, 'Special characters are not allowed'),
        taskDescription: Yup.string().required("Task Description Is Required."),
        taskEndDate: Yup.string().required("End Date Is Required."),
        // taskAssignee: Yup.string().required("Assignee Is Required."),

        taskOwnerUserId: Yup.string().required("Assignee Is Required."),
        taskPriority: Yup.string().required("Task Priority Is Required."),
        taskStartDate: Yup.string().required("Start Date Is Required.")
    })
}