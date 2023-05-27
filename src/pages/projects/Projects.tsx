import React from "react";
import spotdemData from "./data/spotdem";
import spotdemBackend from "./data/spotdemBackend";
import visiApp from "./data/visiApp";
import personalWebsite from "./data/personalWebstrie";
import artPlatform from "./data/artPlatform";
import Project from "./partials/Project";
const Projects: React.FC = () => {
    return (
        <div className={'flex flex-col justify-center items-center py-10 space-y-20'}>
            <Project projectData={spotdemData} />
            <Project projectData={spotdemBackend} />
            <Project projectData={visiApp} />
            <Project projectData={personalWebsite} />
            <Project projectData={artPlatform} />
        </div>
    )
}

export default Projects;
