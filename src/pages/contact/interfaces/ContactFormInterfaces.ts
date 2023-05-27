import {IFormValues} from "./EmailUtilsInterfaces";
import React from "react";

export interface IContactFormInterfaces {
    formValues : IFormValues,
    handelSendEmail: (e: React.FormEvent)=> Promise<void>,
    setFormValues:   React.Dispatch<React.SetStateAction<IFormValues>>
}
