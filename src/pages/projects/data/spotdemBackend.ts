import {IProjectData} from "../interfaces/ProjectInterfaces";

const spotdemBackend: IProjectData = {
    projectName: "Mobile App Backend Control Panel",
    pathname:'spotdem-backend',

    featureImage: "./images/projects/spotdem-backend/feature-photo.png",
    en: {
        projectSummary: "The Mobile App Control Panel Website is a dashboard for the admin of a mobile app to view statistics of the app, manage user activity, and accept or reject user and car verifications.",
        projectDescription: [
            "The Mobile App Control Panel Website is a dashboard that allows the admin of a mobile app to view statistics of the app, including all posts, users, cars, and user verifications.",
            "The admin can also review reports on the app and accept or reject user and car verifications, as well as accept or reject report requests.",
            "If the admin accepts a report, they can delete posts or comments or deactivate a reported user.",
            "The website was developed by a single developer, and implemented using React, ExpressJS, and the Firebase Admin SDK."
        ],
        responsibility: {
            title: "As a sole developer, I was responsible for:",
             responsibilities : [
                "Development, design, and deployment of the Mobile App Control Panel Website.",
                "I implemented user authentication and authorization features to ensure that only authorized users have access to the control panel.",
                "I created a dashboard that displays statistics and reports on the mobile app, allowing the admin to easily review and manage user and post activity.",
                "I designed a user-friendly interface that provides efficient control panel management functionality."
            ]
        },
        technology: {
            "title": "Technologies Used:",
            "technologies": [
                "React",
                "ExpressJS",
                "Firebase Admin SDK"
            ]
        },
        achievement: null
    },
    de: {
        projectSummary: "Die Mobile App Control Panel Website ist ein Dashboard, das es dem Administrator einer mobilen App ermöglicht, Statistiken der App anzuzeigen, einschließlich aller Beiträge, Benutzer, Autos und Benutzerverifizierungen.",
        projectDescription: [
            "Die Mobile App Control Panel Website ist eine Dashboard-Anwendung, die dem Administrator einer mobilen App ermöglicht, Statistiken der App anzuzeigen, einschließlich aller Beiträge, Benutzer, Autos und Benutzerverifikationen.",
            "Der Administrator kann auch Berichte über die App überprüfen und Benutzer- und Fahrzeugverifikationen akzeptieren oder ablehnen sowie Berichtsanfragen akzeptieren oder ablehnen.",
            "Wenn der Administrator einen Bericht akzeptiert, kann er Beiträge oder Kommentare löschen oder einen gemeldeten Benutzer deaktivieren.",
            "Die Website wurde von einem einzigen Entwickler entwickelt und mit React, ExpressJS und dem Firebase Admin SDK implementiert."
        ],
        responsibility: {
            "title": "Als Einzelentwickler war ich verantwortlich für:",
            "responsibilities": [
                "Als alleiniger Entwickler dieses Projekts war ich für die Entwicklung, Gestaltung und Bereitstellung der Mobile App Control Panel-Website verantwortlich.",
                "Ich habe Funktionen zur Benutzerauthentifizierung und Autorisierung implementiert, um sicherzustellen, dass nur autorisierte Benutzer Zugriff auf das Control Panel haben.",
                "Ich habe ein Dashboard erstellt, das Statistiken und Berichte über die mobile App anzeigt, damit der Administrator die Benutzer- und Beitragstätigkeit leicht überwachen und verwalten kann.",
                "Ich habe eine benutzerfreundliche Benutzeroberfläche gestaltet, die eine effiziente Control Panel-Managementfunktionalität bietet."
            ]
        },
        technology: {
            "title": "Verwendete Technologien",
            "technologies": [
                "React",
                "ExpressJS",
                "Firebase Admin SDK"
            ]
        },
        achievement: null
    }
};

export default spotdemBackend;
