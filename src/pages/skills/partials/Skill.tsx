import React from 'react';
import Anime from 'react-anime';
import strings from "../../../localization/languages";
import {ISkillProps} from "../interfaces/SkillInterface";
const Skill: React.FC<ISkillProps> = ({title, logo, experience, including}) => {
    return (
        <div
            className="p-4 max-w-sm rounded-lg bg-darkNavy shadow-md text-white flex flex-col items-center mt-6 w-11/12 md:w-5/12">
            <Anime opacity={[0, 1]} delay={(e: number, i: number) => i * 100} easing={'easeInQuad'}>
                <h1 className="mb-2 text-xl md:text-2xl">{title}</h1>
                {logo}
                <span
                    className="text-white border border-[#445059] rounded text-xs px-2 py-1.5 text-center inline-flex items-center mb-4">{experience}</span>
                {including ? (
                    <div className="text-center">
                        <h5 className="text-sm md:text-md text-white">{strings.skills.including}</h5>
                        {including.map((tool) => (
                            <span
                                className="text-grey border border-[#445059] rounded text-xs md:text-sm px-2 py-1.5 text-center inline-flex items-center m-2"
                                key={tool}>
                {tool}</span>))}
                    </div>
                ) : null}
            </Anime>
        </div>
    );
};

export default Skill;
