import {IProjectData} from "../interfaces/ProjectInterfaces";

const personalWebsite: IProjectData = {
    projectName: "My Personal Website",
    pathname: 'personal-website',
    links: [
        {
            title: 'GitHub',
            link: 'https://github.com/AliMohammad93/My-Portfolio'
        }
    ],
    "en": {
        projectSummary: "I have created a personal website and published it on GitHub to showcase my skills and projects.",
        projectDescription: [
            "The website is a Single-page application developed using React and Typescript and styled using Tailwind CSS",
            "It features a contact form, an overview of my projects and skills, and includes links to my social media profiles, such as GitHub and LinkedIn.",
        ],
        responsibility: null,
        technology: {
            "title": "Technologies Used:",
            "technologies": [
                "React",
                "Typescript",
                "Tailwind CSS",
                "EmailJs"
            ]
        },
        achievement: null
    },
    de: {
        projectSummary: "Ich habe eine persönliche Website erstellt und sie auf GitHub veröffentlicht, um meine Fähigkeiten und Projekte zu präsentieren.",
        projectDescription: [
            "Die Website ist eine Single-Page-Anwendung, die mit React und Typescript entwickelt wurde und mit Tailwind CSS gestaltet ist.",
            "Sie enthält ein Kontaktformular, eine Übersicht über meine Projekte und Fähigkeiten sowie Links zu meinen Profilen in den sozialen Medien wie GitHub und LinkedIn.",
        ],
        responsibility: null,
        technology: {
            "title": "Verwendete Technologien:",
            "technologies": [
                "React",
                "Typescript",
                "Tailwind CSS",
                "EmailJs"
            ]
        },
        achievement: null
    }
};

export default personalWebsite;
