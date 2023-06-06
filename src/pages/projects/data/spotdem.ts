import {IProjectData} from "../interfaces/ProjectInterfaces";

const spotdemData: IProjectData = {
    projectName: "Spotdem Mobile App",
    pathname:'spotdem',
    featureImage: "./images/projects/spotdem/feature-photo.png",
    links: [
        {
            title: "Google Play",
            link: "https://play.google.com/store/apps/details?id=de.ideenkonzept.spotdem"
        },
        {
            title: "App Store",
            link: "https://apps.apple.com/lu/app/spotdem/id1635360948?platform=iphone"
        }
    ],

    en: {
        projectSummary: "Developed and published Spotdem, a cross-platform mobile app that allows users to connect based on their car plates, with features such as user authentication, search functionality, chat, notification, and premium subscription model.",
        projectDescription: [
            "Spotdem is a cross-platform mobile app developed for iOS and Android that allows users to register and add their car plates",
            "Other users can search for a particular user via their car plates and send them friend requests.",
            "After a friend request is accepted, users can start chatting with each other and view each other's profiles.",
            "Users can also create posts to ask for someone they saw before or whose car plate is not registered in the app, and other users can view these posts in specific locations or cities.",
            "Users with premium subscriptions can add up to 3 car plates and receive notifications when their searched car plate is registered in the app.",
            "The app also includes a user and plates verification system and a reports system."
        ],
        responsibility: {
            title: "As a sole developer, I was responsible for:",
            responsibilities: [
                "The full-stack development of the Spotdem mobile app using React Native and Firebase technologies.",
                "Designing and implementing the app's various features, such as user authentication, search functionality, chat and notification features, and premium subscription model.",
                "Integrating Expo Push Notifications to provide real-time updates to users.",
                "Testing and debugging the app on both iOS and Android platforms.",
                "Publishing the app on both Google Play and App Store."
            ]
        },
        technology: {
            title: "Technologies Used:",
            technologies: [
                "React Native",
                "Firebase Realtime Database, Firestore, Authentication, and Storage",
                "Expo Push Notifications",
                "Redux"
            ]
        },
        achievement: {
            title: "Key Achievements:",
            achievements: [
                "Successfully developed and deployed a fully functional cross-platform mobile app that allows users to connect with each other based on their car plates.",
            ]
        }
    },
    de: {
        projectSummary: "Entwickelte und veröffentlichte Spotdem, eine plattformübergreifende Mobile-App, die es Benutzern ermöglicht, sich auf der Grundlage ihrer Autokennzeichen zu verbinden, mit Funktionen wie Benutzerauthentifizierung, Suchfunktionalität, Chat, Benachrichtigung und Premium-Abonnement-Modell.",
        projectDescription: [
            "Spotdem ist eine plattformübergreifende mobile App, die für iOS und Android entwickelt wurde und es Benutzern ermöglicht, sich zu registrieren und ihre Autokennzeichen hinzuzufügen.",
            "Andere Benutzer können nach einem bestimmten Benutzer über sein Autokennzeichen suchen und ihm Freundschaftsanfragen senden.",
            "Nachdem eine Freundschaftsanfrage akzeptiert wurde, können Benutzer miteinander chatten und sich gegenseitig Profile anzeigen.",
            "Benutzer können auch Beiträge erstellen, um nach jemandem zu suchen, den sie zuvor gesehen haben oder dessen Autokennzeichen nicht in der App registriert ist. Andere Benutzer können diese Beiträge an bestimmten Orten oder Städten anzeigen.",
            "Benutzer mit Premium-Abonnements können bis zu 3 Autokennzeichen hinzufügen und Benachrichtigungen erhalten, wenn ihr gesuchtes Autokennzeichen in der App registriert ist.",
            " Die App umfasst auch ein Benutzer- und Kennzeichen-Verifikationssystem sowie ein Berichtssystem."
        ],
        responsibility: {
            title: "Als Einzelentwickler war ich verantwortlich für:",
            responsibilities: [
                "Die Full-Stack-Entwicklung der Spotdem Mobile App unter Verwendung von React Native und Firebase-Technologien.",
                "Design und Implementierung verschiedener Funktionen der App, wie z.B. Benutzerauthentifizierung, Suchfunktionalität, Chat- und Benachrichtigungsfunktionen sowie Premium-Abonnement-Modell.",
                "Integration von Expo Push Notifications, um Benutzern Echtzeit-Updates zu bieten. " ,
                "Testen und Debuggen der App auf iOS- und Android-Plattformen.",
                "Veröffentlichen der App auf Google Play und App Store."
            ]
        },
        technology: {
            title: "Verwendete Technologien",
            technologies: [
                "React Native",
                "Firebase Realtime Database, Firestore, Authentication, and Storage",
                "Expo Push Notifications",
                "Redux"
            ]
        },
        achievement: {
            title: "Key Achievements:",
            achievements: [
                "Erfolgreiche Entwicklung und Bereitstellung einer voll funktionsfähigen plattformübergreifenden mobilen App, die es Benutzern ermöglicht, sich basierend auf ihren Autokennzeichen miteinander zu verbinden.",
            ]
        }
    }
};

export default spotdemData;
