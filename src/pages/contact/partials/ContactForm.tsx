import React from 'react';
import Anime from 'react-anime';
import strings from "../../../localization/languages";
import {IContactFormInterfaces} from "../interfaces/ContactFormInterfaces";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC<IContactFormInterfaces> = ({formValues, setFormValues, handelSendEmail}) => {
    return (
        <Anime opacity={[0, 1]} delay={(e: number, i: number) => i * 100} easing={'easeInQuad'}>
            <ToastContainer/>
            <div className="flex flex-col items-center" style={{maxWidth: 450}}>
                <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white text-primary">{strings.contact.title}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-md md:text-lg">
                    {strings.contact.text}
                </p>
                <form onSubmit={handelSendEmail} className="space-y-8 w-full">
                    <div>
                        <label htmlFor="name"
                               className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">{strings.contact.name}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formValues?.name || ''}
                            onChange={(e) =>
                                setFormValues((prevData) => ({
                                    ...prevData,
                                    name: e.target.value
                                }))
                            }
                            className="shadow-sm border text-gray-900 text-xs md:text-sm rounded-lg block w-full p-2.5 text-white bg-darkNavy"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">{strings.contact.email}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow-sm border text-gray-900 text-xs md:text-sm rounded-lg block w-full p-2.5 text-white bg-darkNavy"
                            required
                            value={formValues?.email || ''}
                            onChange={(e) =>
                                setFormValues((prevData) => ({
                                    ...prevData,
                                    email: e.target.value
                                }))
                            }
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-400">{strings.contact.message}</label>
                        <textarea
                            id="message"
                            rows={6}
                            name="message"
                            className="block p-2.5 w-full text-xs md:text-sm text-white bg-gray-50 rounded-lg shadow-sm border outline-none bg-darkNavy"
                            value={formValues?.message || ''}
                            onChange={(e) =>
                                setFormValues((prevData) => ({
                                    ...prevData,
                                    message: e.target.value
                                }))
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white border-2 border-[#445059] rounded-lg text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 m-2 hover:bg-primary">
                        {strings.contact.send}
                    </button>
                </form>
            </div>
        </Anime>
    );
}

export default ContactForm;
