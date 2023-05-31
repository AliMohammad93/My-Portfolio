import React, {useEffect, useState, useContext} from 'react';
import {useCookies} from 'react-cookie';
import {toast} from 'react-toastify';
import ActivityIndicator from '../../components/ActivityIndicator';
import ContactForm from "./partials/ContactForm";
import EmailSentSuccessfully from './partials/EmailSentSuccessfully';
import sendEmail from './utils/emailUtils';
import {LanguageContext} from "../../context/languageContext";
import strings from '../../localization/languages';
import {IFormValues} from "./interfaces/ContactInterfaces";

const Contact: React.FC = () => {
    useContext(LanguageContext);
    const [cookies, setCookie] = useCookies<string>(['username']);
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
            setCookie('username', formValues.name, {
                expires: new Date(+new Date() + 2678400000)
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
        if (cookies?.username) {
            setIsSuccessfullySent(true);
            setFormValues((prevData) => ({
                ...prevData,
                name: cookies.username
            }));
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <ActivityIndicator/>;
    }

    return (
        <div className="flex justify-center items-center h-full text-white p-6">
            {isSuccessfullySent ? (
                <EmailSentSuccessfully username={formValues.name}/>
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
