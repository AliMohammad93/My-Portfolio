import {ReactNode} from "react";

export interface IOtherSkillsData {
    title: string;
    content: string[];
    logo: ReactNode;
}


export interface IOtherSkillsProps {
    logo: ReactNode;
    skillsGroupArr: string[];
}
