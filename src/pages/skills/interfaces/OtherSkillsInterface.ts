import {ReactNode} from "react";

export interface IOtherSkillsData {
    content: string[];
    logo: ReactNode;
}


export interface IOtherSkillsProps {
    logo: ReactNode;
    skillsGroupArr: string[];
}
