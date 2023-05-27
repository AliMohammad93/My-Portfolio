import strings from "../../../localization/languages";
import {IoIosCodeWorking} from "react-icons/io";
import {IOtherSkillsData} from "../interfaces/OtherSkillsInterface";

export const otherSkills: IOtherSkillsData = {
    title: strings.skills.otherSkills,
    content: [
        'OPP', 'MVC', 'Unit testing', 'Jest', 'Vitest', 'REST API', 'JSON', 'Stripe',
        'Git', 'Github', 'Jira', 'Vercel', 'Heroku', 'Plesk', 'FTP/FTPS', 'Yarn',
        'NPM', 'Webpack', 'Xcode', 'WebStorm'
    ],
    logo: <IoIosCodeWorking className={'text-5xl md:text-6xl text-primary mb-4 rounded'}/>
}
