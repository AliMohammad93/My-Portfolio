import React from 'react';
import Anime from 'react-anime';
import {IOtherSkillsProps} from "../interfaces/OtherSkillsInterface";
const OtherSkills: React.FC<IOtherSkillsProps> = ({logo, skillsGroupArr}) => {
    return (
        <div
            className={'p-6 max-w-sm rounded-lg  bg-darkNavy shadow-md text-white flex flex-col items-center justify-around mt-4 w-11/12 md:w-5/12'}>
            <Anime opacity={[0, 1]} delay={(e: number, i: number) => i * 100} easing={'easeInQuad'}>
                {logo}
                <div className="flex flex-row  flex-wrap justify-center">
                    <Anime opacity={[0, 1]} delay={(e: number, i: number) => i * 100} easing={'easeInQuad'}>
                        {skillsGroupArr.map((skill) => (
                            <span
                                className="text-grey border border-[#445059] rounded text-xs md:text-sm px-2 py-1.5 text-center inline-flex items-center m-2"
                                key={skill}>
                {skill}
              </span>))}
                    </Anime>
                </div>
            </Anime>
        </div>
    );
};

export default OtherSkills;
