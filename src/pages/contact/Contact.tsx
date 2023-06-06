import React, {useEffect, useState, useContext} from 'react';
import {useCookies} from 'react-cookie';
import {toast} from 'react-toastify';
import ActivityIndicator from '../../components/ActivityIndicator';
import ContactForm from "./partials/ContactForm";
import EmailSentSuccessfully from './partials/EmailSentSuccessfully';
import sendEmail from './utils/emailUtils';
import {LanguageContext} from "../../context/LanguageContext";
import strings from '../../localization/languages';
import {IFormValues} from "./interfaces/ContactInterfaces";

const Contact: React.FC = () => {
    useContext(LanguageContext);
    const [cookies, setCookie] = useCookies<string>(['emailWasSent']);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSuccessfullySent, setIsSuccessfullySent] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<IFormValues>({
        name: '',
        email: '',
        message: ''
    });

    const handelSendEmail = async (e: React.FormEvent) => {
        try {
            setIsLoading(true);
            e.preventDefault();
            await sendEmail(formValues);
            setIsSuccessfullySent(true);
            setCookie('emailWasSent', true, {
                expires: new Date(+new Date() + 2678400000) // approximately 31 days.
            });
            setIsLoading(false);
        } catch (e) {
            toast.error(strings.errorMessage, {
                position: 'top-center',
                autoClose: 2000,
                closeOnClick: true,
                draggable: true,
                hideProgressBar: true,
                theme: 'dark'
            });
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (cookies?.emailWasSent) {
            setIsSuccessfullySent(true);
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <ActivityIndicator/>;
    }

    return (
        <div className="flex justify-center items-center h-full text-white p-6">
            {isSuccessfullySent ? (
                <EmailSentSuccessfully/>
            ) : (
                <ContactForm
                    formValues={formValues}
                    setFormValues={setFormValues}
                    handelSendEmail={handelSendEmail}
                />
            )}
        </div>
    );
}

export default Contact;
