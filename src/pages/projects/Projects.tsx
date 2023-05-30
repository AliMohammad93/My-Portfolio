import React, {useState} from "react";
import spotdemData from "./data/spotdem";
import spotdemBackend from "./data/spotdemBackend";
import visiApp from "./data/visiApp";
import personalWebsite from "./data/personalWebsite";
import artPlatform from "./data/artPlatform";
import Project from "./partials/Project";
import ProjectDescription from "./partials/ProjectDescription";

const Projects: React.FC = () => {
    const [displayProject, setDisplayProject] = useState<boolean>(false);
    const [projectName, setProjectName] = useState<string>('');

    const setDisplayedProjectHandler = (projectName: string) => {
        setProjectName(projectName);
        toggleDisplayProject();
    }
    const toggleDisplayProject = () => {
        setDisplayProject((prevState) => !prevState);
    };

    return (
        <div className={'flex flex-col justify-center items-center py-10 space-y-20'}>
            {displayProject ? (<ProjectDescription toggleDisplayProject={toggleDisplayProject} projectName={projectName}/>) : (
                <>
                    <Project projectData={spotdemData} setDisplayedProject={setDisplayedProjectHandler}/>
                    <Project projectData={spotdemBackend} setDisplayedProject={setDisplayedProjectHandler}/>
                    <Project projectData={visiApp} setDisplayedProject={setDisplayedProjectHandler}/>
                    <Project projectData={personalWebsite} setDisplayedProject={setDisplayedProjectHandler}/>
                    <Project projectData={artPlatform} setDisplayedProject={setDisplayedProjectHandler}/>
                </>)}
        </div>
    )
}

export default Projects;
