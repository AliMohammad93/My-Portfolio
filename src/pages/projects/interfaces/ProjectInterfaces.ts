interface ProjectTranslatedData {
    projectSummary: string;
    projectDescription: string[];

    responsibility: {
        title: string;
        responsibilities: string[];
    } | null;
    technology: {
        title: string;
        technologies: string[];
    };
    achievement: {
        title: string;
        achievements: string[];
    } | null;
}

export interface IProjectData {
    projectName: string,
    featureImage?: string,
    pathname:string,
    en: ProjectTranslatedData
    de: ProjectTranslatedData ,
    links?: {
        title: string,
        link: string
    }[]
}

export interface ProjectProps {
    projectData: IProjectData;
    setDisplayedProject: (projectName:string) => void;
}

export interface ProjectDescriptionProps {
    toggleDisplayProject: () => void;
    projectName: string
}
