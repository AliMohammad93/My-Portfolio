import emailJs from "@emailjs/browser";
import {IFormValues} from "../interfaces/ContactInterfaces";

const sendEmail = async (formValue: IFormValues) => {
    try {
        const {REACT_APP_MAIL_SERVICE_ID, REACT_APP_MAIL_TEMPLATE_ID, REACT_APP_MAIL_PUBLIC_KEY} = process.env;
        await emailJs.send(REACT_APP_MAIL_SERVICE_ID , REACT_APP_MAIL_TEMPLATE_ID , formValue as {}, REACT_APP_MAIL_PUBLIC_KEY)
    } catch (e) {
        throw new Error(e as string);
    }
};

export default sendEmail;
