import React, {useEffect, useState, useContext} from "react";
import Anime from "react-anime";
import {IoIosArrowBack} from "react-icons/io";
import strings from "../../../localization/languages";
import {LanguageContext} from "../../../context/languageContext";
import {ProjectDescriptionProps , IProjectData} from "../interfaces/ProjectInterfaces";

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({toggleDisplayProject, projectName}) => {
    const [projectData, setProjectData] = useState<IProjectData>();
    const [error, setError] = useState<boolean>(false);
    const {language} = useContext(LanguageContext);
    useEffect(() => {
        let filename = null;
        switch (projectName) {
            case 'spotdem':
                filename = 'spotdem'
                break;
            case 'spotdem-backend':
                filename = 'spotdemBackend'
                break;
            case 'visiapp':
                filename = 'visiApp';
                break;
            case 'personal-website':
                filename = 'personalWebsite';
                break;
            case 'art-platform':
                filename = 'artPlatform';
                break;
            default:
                setError(true);
        }
        if (filename) {
            import(`../data/${filename}`)
                .then((module) => {
                    const data = module.default;
                    setProjectData(data);
                })
                .catch((e) => {
                    setError(true);
                });
        } else {
            setError(true);
        }
    }, []);

    return (
        <Anime opacity={[0, 1]} delay={(e: number, i: number) => i * 500} easing={'easeInOutExpo'}>
            {error ? (
                <div className="bg-primary border   text-white px-4 py-3 rounded relative" role="alert">
                    <p>{strings.errorMessage}</p>
                </div>
            ) : (
                <div className={'flex flex-col justify-center items-center p-10 w-full gap-y-4'}>
                    <div className='w-full'>
                        <IoIosArrowBack className={'text-5xl md:text-6xl bg-darkNavy text-primary hover:shadow-lg mb-4 rounded'} onClick={toggleDisplayProject}/>
                    </div>
                    <p className={'text-xl text-primary'}>{projectData?.projectName}</p>

                    <ul className={'list-disc ml-5 text-left self-start'}>
                        {projectData?.[language]?.projectDescription.map((des, index) => (
                            <li className={'text-md text-white'} key={index}>{des}</li>
                        ))}
                    </ul>
                    {projectData?.[language].responsibility ? (
                        <ul className={'list-disc ml-5 text-left self-start'}>
                            <p className={'text-lg text-primary mb-2'}> {projectData?.[language]?.responsibility?.title}</p>
                            {projectData?.[language]?.responsibility?.responsibilities.map((responsibility, key) => (
                                <li className={'text-md text-white'} key={key}>{responsibility}</li>
                            ))}
                        </ul>
                    ) : null}
                    <ul className={'list-disc ml-5 text-left self-start'}>
                        <p className={'text-lg text-primary mb-2'}> {projectData?.[language]?.technology.title}</p>
                        {projectData?.[language]?.technology.technologies.map((tec, index) => (
                            <li className={'text-md text-white'} key={index}>{tec}</li>
                        ))}
                    </ul>

                    {projectData?.[language]?.achievement ? (
                        <ul className={'list-disc ml-5 text-left self-start'}>
                            <p className={'text-lg text-primary mb-2'}> {projectData?.[language]?.achievement?.title}</p>
                            {projectData?.[language]?.achievement?.achievements.map((achievement, key) => (
                                <li className={'text-md text-white'} key={key}>{achievement}</li>
                            ))}
                        </ul>
                    ) : null}
                    {projectData?.links ? (
                        <ul className={'list-disc ml-5 text-left self-start'}>
                            <p className={'text-lg text-primary mb-2'}> {language === 'en' ? 'Links' : 'Link'}</p>
                            {projectData.links.map((link, key) => (
                                <li className={'text-md text-white'} key={key}>
                                    <a href={link.link} target='_blank'>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            )}
        </Anime>

    );
}

export default ProjectDescription;
