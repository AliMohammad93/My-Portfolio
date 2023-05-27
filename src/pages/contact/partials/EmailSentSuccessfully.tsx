import React from 'react';
import strings from "../../../localization/languages";

const EmailSentSuccessfully: React.FC<{ username: string }> = ({username}) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white text-primary">{strings.contact.thankfulness + ' ' + username}</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                {strings.contact.replyText}
            </p>
        </div>
    );
}

export default EmailSentSuccessfully;
