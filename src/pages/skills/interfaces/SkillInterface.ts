import {ReactNode} from "react";

export interface ISkillProps {
    title: string;
    logo: ReactNode;
    experience: string;
    including?: string[];
}

export interface ISkillData {
    title ? : string;
    content: ISkillProps[];
}



