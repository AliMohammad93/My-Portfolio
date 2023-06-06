import React from "react";
export interface IFormValues {
    name: string,
    email: string,
    message: string
}

export interface IContactFormInterfaces {
    formValues : IFormValues,
    handelSendEmail: (e: React.FormEvent)=> Promise<void>,
    setFormValues:   React.Dispatch<React.SetStateAction<IFormValues>>
}



