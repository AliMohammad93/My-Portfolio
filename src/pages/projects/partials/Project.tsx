import React, {useContext} from "react";
import Anime from 'react-anime';
import strings from "../../../localization/languages";
import {LanguageContext} from "../../../context/LanguageContext";
import CustomButton from "../../../components/CustomButton";
import {ProjectProps} from "../interfaces/ProjectInterfaces";

const Project: React.FC<ProjectProps> = ({projectData , setDisplayedProject}) => {
    const {language} = useContext(LanguageContext);
    const handleDisplayProject = () => {
        setDisplayedProject(projectData.pathname);
    };
    return (
        <div className="w-4/5 rounded-xl shadow-md text-white">
            <Anime opacity={[0, 1]} delay={(e: number, i: number) => i * 500} easing={'easeInQuad'}>
                <div className={"w-full h-auto"}>
                    {projectData?.featureImage && (<img src={projectData?.featureImage} alt="Image"/>)}
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-lg md:text-2xl">{projectData.projectName}</h5>
                    <h6 className="mb-3 text-sm md:text-lg">{strings.projects.projectDescription}:</h6>
                    <p>{projectData[language].projectSummary}</p>
                    <CustomButton onClick={handleDisplayProject} label={strings.projects.seeMore}/>
                </div>
            </Anime>
        </div>
    );
}

export default Project;
