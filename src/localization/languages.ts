import LocalizedStrings from 'react-localization';
import ILocalizedStrings from "./languagesInterface";

const strings: ILocalizedStrings = new LocalizedStrings({
    en: {
        whoIAm: 'I am a passionate Full Stack JavaScript Developer with experience in building mobile and web applications using a range of powerful JavaScript libraries and frameworks, including React, React Native, Node.js, and SQL and NoSQL databases.',
        resume: 'See my resume',
        errorMessage:'Something went wrong please try again',
        home: {
            about: "About",
            skills: 'Skills',
            projects: "Projects",
            contact: 'Contact',
        },
        projects: {
            projectName: 'Project Name',
            projectDescription: 'Project Description',
            seeMore: 'More ...'
        },
        contact: {
            title: 'Get In Touch',
            text: "Don't hesitate to reach out, I'd love to hear from you!",
            name: 'Your name',
            email: 'Your email',
            message: 'Your message',
            send: 'Send',
            thankfulness: 'Thank you!',
            replyText: 'I appreciate your message and will provide a prompt response as soon as possible.',

        },
        skills: {
            expert: 'Expert',
            advanced: 'Advanced',
            intermediate: 'Intermediate',
            including: 'Including',
            mobileApp: 'Mobile app development',
            frontend: 'Frontend web development',
            backend: 'Backend web development',
            database: 'Database',
            otherSkills: 'Other Skills'
        }
    },
    de: {
        whoIAm: 'Ich bin ein leidenschaftlicher Full-Stack-JavaScript-Entwickler mit Erfahrung in der Entwicklung von mobilen und Webanwendungen mit einer Reihe leistungsstarker JavaScript-Bibliotheken und -Frameworks, darunter React, React Native, Node.js und SQL- und NoSQL-Datenbanken.',
        resume: 'Siehe Lebenslauf',
        errorMessage:'Etwas ist schief gelaufen. Bitte versuche es erneut',
        home: {
            about: "Über mich",
            skills: 'Fertigkeiten',
            projects: "Projekte",
            contact: 'Kontakt',
        },
        projects: {
            projectName: 'Projektname',
            projectDescription: 'Projektbeschreibung',
            seeMore: 'Mehr ...'
        },
        contact: {
            title: 'Kontakt aufnehmen',
            text: "Zögere nicht, mich zu kontaktieren, ich würde mich freuen von dir zu hören!",
            name: 'Deine Name',
            email: 'Deine E-Mail',
            message: 'Deine Nachricht',
            send: 'Senden',
            thankfulness: 'Danke!',
            replyText: 'Ich schätze Ihre Nachricht und werde so schnell wie möglich eine schnelle Antwort geben.',

        },
        skills: {
            expert: 'Experte',
            advanced: 'Fortgeschrittene',
            intermediate: 'Mittelstufe',
            including: 'Einschließlich',
            mobileApp: 'Mobile-App-Entwicklung',
            frontend: 'Frontend-Webentwicklung',
            backend: 'Backend-Webentwicklung',
            database: 'Datenbank',
            otherSkills: 'Andere Fertigkeiten'
        }
    }
});
export default strings
