import React, {useContext} from 'react';
import Anime from 'react-anime';
import {SiStackoverflow, SiGithub, SiLinkedin} from 'react-icons/si';
import { FaFilePdf } from 'react-icons/fa';
import CustomButton from "../../components/CustomButton";
import strings from '../../localization/languages';
import {LanguageContext} from "../../context/LanguageContext";
const About: React.FC = () => {
    useContext(LanguageContext);

    return (
        <div className="flex justify-center items-center w-full h-full">
            <Anime opacity={[0, 1]} delay={(e: number, i: number) => i * 500} easing="easeInQuad">
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-10">
                        <img
                            src="/images/me.jpeg"
                            alt="Avatar"
                            className="h-52 w-52 rounded-full object-cover object-center"
                        />
                    </div>
                    <h1 className="text-grey text-xl md:text-2xl mt-3">Ali Mohammad</h1>
                    <p className="text-white text-md md:text-xl m-3 max-w-md text-center">{strings.whoIAm}</p>
                    <div className="md:hidden p-6 flex justify-center flex-initial">
                        <div className="flex space-x-6">
                            <a href="https://stackoverflow.com/users/10413070/ali-mohammad" target="_blank">
                                <SiStackoverflow className="text-2xl text-grey rounded hover:text-primary"/>
                            </a>
                            <a href="https://github.com/AliMohammad93" target="_blank">
                                <SiGithub className="text-2xl text-grey rounded hover:text-primary"/>
                            </a>
                            <a href="https://www.linkedin.com/in/ali-mohammad-1bb000219/" target="_blank">
                                <SiLinkedin className="text-2xl text-grey rounded hover:text-primary"/>
                            </a>
                        </div>
                    </div>

                </div>
            </Anime>
        </div>
    )
}
export default About;
