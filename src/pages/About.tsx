import React, {useEffect, useState} from 'react';
import {FaFilePdf} from "react-icons/fa";
import Anime from 'react-anime';
import strings from "../localization/languages";
import {useContext} from 'react';
import {LanguageContext} from './Home';
import {SiStackoverflow, SiGithub, SiLinkedin, SiInstagram} from "react-icons/si";

function About() {
    useContext(LanguageContext);
    const [isLoading, setIsLoading] = useState(true);
    const openResume = () => {
        window.open('/Ali-Mohammad-CV.pdf', '_blank');
    };

    useEffect(() => {
        setIsLoading(false);
    }, []);
    if (isLoading) {
        return (
            <div className={'flex justify-center items-center w-full h-full'}>
                <div role="status">
                    <svg aria-hidden="true"
                         className="mr-2 w-8 h-8 text-white animate-spin fill-primary"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className={'flex justify-center items-center w-full h-full'}>
            <Anime opacity={[0, 1]} delay={(e : number, i : number) => i * 500} easing={'easeInQuad'}>
                <div className={'flex flex-col justify-center items-center '}>
                    <div className={'mt-10'}>
                        <img src={'/images/me.jpeg'} alt="me"
                             className={'h-52 w-52 rounded-full object-cover object-center'}/>
                    </div>
                    <h1 className={'text-grey text-xl md:text-2xl mt-3'}>Ali Mohammad</h1>
                    <p className={'text-white text-md md:text-xl m-3 max-w-md text-center'}>{strings.whoIAm}</p>

                    <div className={'md:hidden p-6 flex justify-center flex-initial'}>
                        <div className={'flex space-x-6'}>
                            <a href='https://stackoverflow.com/users/10413070/ali-mohammad' target={'_blank'}>
                                <SiStackoverflow className={'text-2xl text-grey rounded hover:text-primary'}/>
                            </a>
                            <a href='https://github.com/AliMohammad93' target={'_blank'}>
                                <SiGithub className={'text-2xl text-grey  rounded hover:text-primary'}/>
                            </a>
                            <a href='https://www.linkedin.com/in/ali-mohammad-1bb000219/' target={'_blank'}>
                                <SiLinkedin className={'text-2xl text-grey  rounded hover:text-primary'}/>
                            </a>
                        </div>
                    </div>
                    <button type="button"
                            className="text-white border-2 border-[#445059] rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 m-2 hover:bg-primary"
                            onClick={openResume}>
                        <FaFilePdf className={'mr-2 text-md'}/>
                        <p className={'text-md text-grey'} >{strings.resume}</p>
                    </button>
                </div>
            </Anime>
        </div>
    )
}

export default About;
