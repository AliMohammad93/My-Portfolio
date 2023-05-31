export default interface ILocalizedStrings {
    whoIAm: string;
    resume: string;
    errorMessage:string,
    home: {
        about: string;
        skills: string;
        projects: string;
        contact: string;
    };
    projects: {
        projectName: string;
        projectDescription: string;
        seeMore: string;
    };
    contact: {
        title: string;
        text: string;
        name: string;
        email: string;
        message: string;
        send: string;
        thankfulness: string;
        replyText: string;

    };
    skills: {
        expert: string;
        advanced: string;
        intermediate: string;
        including: string;
        mobileApp: string;
        frontend: string;
        backend: string;
        database: string;
        otherSkills: string;
    };
    setLanguage: (language: string) => void;
}
