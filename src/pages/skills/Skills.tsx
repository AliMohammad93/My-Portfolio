import {useContext} from "react";
import Skill from "./partials/Skill";
import OtherSkills from "./partials/OtherSkills";
import {LanguageContext} from "../Home";
import {skills} from "./data/SkillData";
import {otherSkills} from "./data/OtherSkillsData";
function Skills() {
    useContext(LanguageContext);
    return (
        <div className={'flex flex-col justify-center items-center py-10 w-ful'}>
            {skills.map((filed) => (
                <>
                    {filed.title && (
                        <p key={filed.title} className="text-2xl md:text-3xl font-bold text-white mt-14 m-6">
                            {filed.title}
                        </p>)}
                    <div
                        className={'flex flex-row flex-wrap justify-center items-center items-stretch w-full md:space-x-4'}>
                        {filed.content.map((skill) => (
                            <Skill
                                key={skill.title}
                                title={skill.title}
                                logo={skill.logo}
                                experience={skill.experience}
                                including={skill.including}
                            />
                        ))}
                    </div>
                </>
            ))}
            <p className={'text-2xl md:text-3xl font-bold text-white mt-14 m-6'}>{otherSkills.title}</p>
            <div className={'flex flex-row flex-wrap justify-center items-center items-stretch w-full md:space-x-4'}>
                <OtherSkills
                    skillsGroupArr={otherSkills.content}
                    logo={otherSkills.logo}/>
            </div>
        </div>
    )
}

export default Skills;
