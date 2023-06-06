import {IProjectData} from "../interfaces/ProjectInterfaces";

const spotdemBackend: IProjectData = {
    projectName: "Backend Control Panel for Mobile App",
    pathname:'spotdem-backend',
    featureImage: "./images/projects/spotdem-backend/feature-photo.png",
    en: {
        projectSummary: "A dashboard designed for the admin of a mobile app. It provides the ability to view app statistics, manage user activity, and handle tasks such as accepting or rejecting user and car verifications, as well as handling reports.",
        projectDescription: [
            "This project allows the admin of a mobile app to view statistics of the app, including all posts, users, cars, and user verifications.",
            "The admin can also review reports on the app and accept or reject user and car verifications, as well as accept or reject report requests.",
            "If the admin accepts a report, they can delete posts or comments or deactivate a reported user.",
        ],
        responsibility: {
            title: "As a sole developer, I was responsible for:",
             responsibilities : [
                "Development, design, and deployment of the project",
                "Implemented user authentication and authorization features to ensure that only authorized users have access to the control panel.",
                "Created a dashboard that displays statistics and reports on the mobile app, allowing the admin to easily review and manage user and post activity.",
            ]
        },
        technology: {
            "title": "Technologies Used:",
            "technologies": [
                "React",
                "Material UI",
                "Tailwind CSS",
                "Nodejs",
                "ExpressJS",
                "Firebase Admin SDK",
            ]
        },
        achievement: null
    },
    de: {
        projectSummary: "Ein Dashboard, das für den Administrator einer mobilen App entwickelt wurde. Es bietet die Möglichkeit, App-Statistiken anzuzeigen, Benutzeraktivitäten zu verwalten und Aufgaben wie die Annahme oder Ablehnung von Benutzer- und Fahrzeugverifizierungen sowie das Bearbeiten von Berichten zu handhaben.",
        projectDescription: [
            "Dieses Projekt ermöglicht es dem Administrator einer mobilen App, Statistiken der App anzuzeigen, einschließlich aller Beiträge, Benutzer, Autos und Benutzerverifikationen.",
            "Der Administrator kann auch Berichte über die App überprüfen und Benutzer- und Fahrzeugverifikationen akzeptieren oder ablehnen sowie Berichtsanfragen annehmen oder ablehnen.",
            "Wenn der Administrator einen Bericht akzeptiert, kann er Beiträge oder Kommentare löschen oder einen gemeldeten Benutzer deaktivieren.",
        ],
        responsibility: {
            "title": "Als Einzelentwickler war ich verantwortlich für:",
            "responsibilities": [
                "Entwicklung, Design und Bereitstellung des Projekts",
                "Implementierung von Benutzerauthentifizierungs- und Autorisierungsmerkmalen, um sicherzustellen, dass nur autorisierte Benutzer Zugriff auf das Kontrollpanel haben.",
                "Erstellung eines Dashboards, das Statistiken und Berichte über die mobile App anzeigt, sodass der Administrator Benutzer- und Postaktivitäten einfach überprüfen und verwalten kann.",
            ]
        },
        technology: {
            "title": "Verwendete Technologien",
            "technologies": [
                "React",
                "Material UI",
                "Tailwind CSS",
                "Nodejs",
                "ExpressJS",
                "Firebase Admin SDK",
            ]
        },
        achievement: null
    }
};

export default spotdemBackend;
