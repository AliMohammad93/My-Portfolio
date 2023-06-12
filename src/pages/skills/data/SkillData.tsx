import {
    SiJavascript,
    SiReact,
    SiApachecordova,
    SiCss3,
    SiFirebase,
    SiMongodb,
    SiLaravel,
    SiTypescript
} from "react-icons/si";
import {FaDatabase, FaNodeJs} from "react-icons/fa";
import {ISkillData} from "../interfaces/SkillInterface";

export const skills: ISkillData[] = [
    {
        content: [
            {
                title: "JavaScript",
                logo: <SiJavascript className={'text-5xl md:text-6xl bg-[#353231] text-[#f0dc4e] mb-4 rounded'}/>,
                experience: 'expert',
                including: ['Redux']
            },
            {
                title: "Typescript",
                logo: <SiTypescript className={'text-5xl md:text-6xl bg-[#fff] text-[#2f74c0] mb-4 rounded'}/>,
                experience: 'expert',
            }
        ]

    },
    {
        title: 'mobileApp',
        content: [
            {
                title: "React Native",
                logo: <SiReact className={'text-5xl md:text-6xl text-[#5ed3f3] mb-4 rounded'}/>,
                experience: 'expert',
                including: ['IOS', 'Android', 'Expo']
            },
            {
                title: "Cordova",
                logo: <SiApachecordova className={'text-5xl md:text-6xl text-[#f7f7f7] mb-4 rounded'}/>,
                experience: 'intermediate',
                including: ['Framework7']
            }
        ]
    },
    {
        title: 'frontend',
        content: [
            {
                title: "React",
                logo: <SiReact className={'text-5xl md:text-6xl  text-[#5ed3f3] mb-4 rounded'}/>,
                experience: 'expert',
                including: ['Hooks', 'Class Component','Material UI']
            },
            {
                title: "CSS",
                logo: <SiCss3 className={'text-5xl md:text-6xl text-[#0068ba] mb-4 rounded'}/>,
                experience: 'advanced',
                including: ['Tailwind', 'Sass', 'Bootstrap']
            },
        ]
    },
    {
        title: 'backend',
        content: [
            {
                title: "Node.js",
                logo: <FaNodeJs className={'text-5xl md:text-6xl text-[#63b246] mb-4 rounded'}/>,
                experience: 'advanced',
                including: ['Express.js']
            },
        ]
    },

    {
        title: 'database',
        content: [
            {
                title: "Firebase",
                logo: <SiFirebase className={'text-5xl md:text-6xl text-[#f7c630] mb-4 rounded'}/>,
                experience: 'expert',
            },
            {
                title: "SQL",
                logo: <FaDatabase className={'text-5xl md:text-6xl text-[#2583c9] mb-4 rounded'}/>,
                experience: 'advanced',
            }
            , {
                title: "MongoDB",
                logo: <SiMongodb className={'text-5xl md:text-6xl text-[#0fa54d] mb-4 rounded'}/>,
                experience: 'expert',
                including: ['Mongoose']
            }
        ]
    },
];


