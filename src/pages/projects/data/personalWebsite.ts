import {IProjectData} from "../interfaces/ProjectInterfaces";

const personalWebsite: IProjectData = {
    projectName: "My Personal Website",
    pathname: 'personal-website',
    links: [
        {
            title: 'GitHub',
            link: 'https://github.com/AliMohammad93/My-personal-website'
        }
    ],
    "en": {
        projectSummary: "As a fullstack Javascript developer, I have created a personal website to showcase my skills and projects",
        projectDescription: [
            "The website is a Single-page application developed using React and styled using Tailwind CSS",
            "It features a contact form to connect with me and includes links to my social media profiles, such as GitHub, and LinkedIn.",
            "Through this project, I have demonstrated my expertise in web development and utilized my skills in front-end technologies."
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
        projectSummary: "Als Fullstack-JavaScript-Entwickler habe ich eine persönliche Website erstellt, um meine Fähigkeiten und Projekte zu präsentieren",
        projectDescription: [
            "Die Website ist eine Single-Page-Anwendung, die mit React entwickelt wurde und mit Tailwind CSS gestaltet wurde",
            "Sie verfügt über ein Kontaktformular, um mit mir in Kontakt zu treten, und enthält Links zu meinen Social-Media-Profilen wie GitHub, und LinkedIn.",
            "Durch dieses Projekt habe ich meine Expertise in der Webentwicklung demonstriert und meine Fähigkeiten in Front-End Technologien genutzt."
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
