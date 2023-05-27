import {SiJavascript, SiReact, SiApachecordova, SiCss3, SiFirebase, SiMongodb, SiLaravel} from "react-icons/si";
import {FaDatabase, FaNodeJs} from "react-icons/fa";
import strings from "../../../localization/languages";
import {ISkillData } from "../interfaces/SkillInterface";

export const skills: ISkillData[] = [
    {
        title: null,
        content: [
            {
                title: "JavaScript",
                logo: <SiJavascript className={'text-5xl md:text-6xl bg-[#353231] text-[#f0dc4e] mb-4 rounded'}/>,
                experience: strings.skills.expert,
                including: ['TypeScript', 'Redux']
            },
        ]
    },
    {
        title: strings.skills.mobileApp,
        content: [
            {
                title: "React Native",
                logo: <SiReact className={'text-5xl md:text-6xl text-[#5ed3f3] mb-4 rounded'}/>,
                experience: strings.skills.expert,
                including: ['IOS', 'Android', 'Expo']
            },
            {
                title: "Cordova",
                logo: <SiApachecordova className={'text-5xl md:text-6xl text-[#f7f7f7] mb-4 rounded'}/>,
                experience: strings.skills.expert,
                including: ['Framework7']
            }
        ]
    },
    {
        title: strings.skills.frontend,
        content: [
            {
                title: "React",
                logo: <SiReact className={'text-5xl md:text-6xl  text-[#5ed3f3] mb-4 rounded'}/>,
                experience: strings.skills.expert,
                including: ['Hooks', 'Class Component']
            },
            {
                title: "CSS",
                logo: <SiCss3 className={'text-5xl md:text-6xl text-[#0068ba] mb-4 rounded'}/>,
                experience: strings.skills.advanced,
                including: ['Tailwind', 'Sass', 'Bootstrap']
            },
        ]
    },
    {
        title: strings.skills.backend,
        content: [
            {
                title: "Node.js",
                logo: <FaNodeJs className={'text-5xl md:text-6xl text-[#63b246] mb-4 rounded'}/>,
                experience: strings.skills.advanced,
                including: ['Express.js']
            },
            {
                title: "Laravel",
                logo: <SiLaravel className={'text-5xl md:text-6xl text-[#e83a2d] mb-4 rounded'}/>,
                experience: strings.skills.intermediate,
            },
        ]
    },

    {
        title: strings.skills.database,
        content: [
            {
                title: "Firebase",
                logo: <SiFirebase className={'text-5xl md:text-6xl text-[#f7c630] mb-4 rounded'}/>,
                experience: strings.skills.expert,
            },
            {
                title: "SQL",
                logo: <FaDatabase className={'text-5xl md:text-6xl text-[#2583c9] mb-4 rounded'}/>,
                experience: strings.skills.expert,
            }
            , {
                title: "MongoDB",
                logo: <SiMongodb className={'text-5xl md:text-6xl text-[#0fa54d] mb-4 rounded'}/>,
                experience: strings.skills.expert,
                including: ['Mongoose']
            }
        ]
    },
];


