import React, {useState, useEffect ,  createContext} from 'react';
import {SiStackoverflow, SiGithub, SiLinkedin} from "react-icons/si";
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import strings from "../localization/languages";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { useCookies } from 'react-cookie';
export const LanguageContext = createContext('en');

const Home: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [pagePartial, setPagePartial] = useState(<About/>);
    const [activeLink, setActiveLink] = useState<string>('About');
    const [cookies, setCookie] = useCookies(['preferredLanguage']);
    const [lan, setLan] = useState('en');

    const handleSetHomeScreen = (e: React.MouseEvent) => {
        e.preventDefault();
        setPagePartial(<About/>);
        setActiveLink('About');
    }

    const changeLanguage = (e: React.MouseEvent, language: string) => {
        e.preventDefault();
        strings.setLanguage(language)
        setLan(language);
        setCookie('preferredLanguage', language, {expires: new Date((+new Date) + 2678400000)});
    }

    const handleSetPartial = (e: React.MouseEvent, PartialName: string) => {
        e.preventDefault();
        setActiveLink(PartialName);
        switch (PartialName) {
            case 'About':
                setPagePartial(<About/>);
                break;
            case 'Skills':
                setPagePartial(<Skills/>)
                break;
            case 'Projects':
                setPagePartial(<Projects/>)
                break;
            case 'Contact':
                setPagePartial(<Contact/>)
                break;
            default:
                setPagePartial(<About/>);
        }
        setOpenMenu(false);
    }

    const toggleOpenHamburgerMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpenMenu(openMenu => !openMenu)
    }

    useEffect(() => {
        if (cookies?.preferredLanguage) {
            setLan(cookies?.preferredLanguage);
            strings.setLanguage(cookies?.preferredLanguage)
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* burger menu */}
            <div
                className={`absolute z-50 w-full h-full flex justify-center  flex-col  bg-black1 ${openMenu ? 'block' : 'hidden'}`}>
                <div className={'flex justify-end m-6'}>
                    <a href={'#'} onClick={(e) => toggleOpenHamburgerMenu(e)}>
                        <AiOutlineClose color={'#fff'} className={'text-4xl'}/>
                    </a>
                </div>
                <div className="flex items-center justify-center flex-auto">
                    <ul className='space-y-8 flex flex-col justify-center items-center'>
                        <li className="text-white text-4xl font-bold">
                            <a href='#'
                               className={`font-normal hover:text-primary hover:ml-2 ${activeLink === 'About' ? 'text-primary ml-2' : null}`}
                               onClick={(e) => handleSetPartial(e, 'About')}>{strings.home.about}</a>
                        </li>
                        <li className="text-white text-4xl font-bold">
                            <a href='#'
                               className={`font-normal hover:text-primary  hover:ml-2 ${activeLink === 'Skills' ? 'text-primary ml-2' : null}`}
                               onClick={(e) => handleSetPartial(e, 'Skills')}>Skills</a>
                        </li>
                        <li className="text-white text-4xl font-bold">
                            <a href='#'
                               className={`font-normal hover:text-primary  hover:ml-2 ${activeLink === 'Projects' ? 'text-primary ml-2' : null}`}
                               onClick={(e) => handleSetPartial(e, 'Projects')}>{strings.home.projects}</a>
                        </li>

                        <li className="text-white text-4xl font-bold">
                            <a href='#'
                               className={`font-normal hover:text-primary  hover:ml-2 ${activeLink === 'Contact' ? 'text-primary ml-2' : null}`}
                               onClick={(e) => handleSetPartial(e, 'Contact')}>{strings.home.contact}</a>
                        </li>
                    </ul>
                </div>
                <div
                    className={'flex flex-row justify-center space-x-5 p-6 border  border-[#94a1ab]/[.30] border-b-0 border-l-0 border-r-0'}>
                    <a href='#'
                       className={`hover:text-primary  hover:text-primary text-sm   block  ${lan === 'en' ? 'text-primary' : 'text-grey'}`}
                       onClick={(e) => changeLanguage(e, 'en')}>EN</a>
                    <a href='#'
                       className={`hover:text-primary  hover:text-primary text-sm  block  ${lan === 'de' ? 'text-primary' : 'text-grey'}`}
                       onClick={(e) => changeLanguage(e, 'de')}>DE</a>
                </div>
            </div>
            {/* end Hamburger menu */}


            {/*Hamburger menu and logo on responsive */}
            <div className={'bg-black2 md:hidden flex flex-row justify-between p-4 flex-initial'}>
                <a href={'#'} className="md:mt-10 md:ml-20 flex-initial" onClick={(e) => handleSetHomeScreen(e)}>
                    <p className="text-primary text-2xl font-bold inline">&#60;</p>
                    <p className=" text-2xl font-bold inline text-white">Ali</p>
                    <p className="font-face-mulish  text-2xl font-bold inline text-primary">/&#62;</p>
                </a>
                <div>
                    <a href={'#'} onClick={(e) => toggleOpenHamburgerMenu(e)}>
                        <GiHamburgerMenu color={'#fff'} className={'text-2xl'}/>
                    </a>
                </div>
            </div>
            {/* end Hamburger menu and logo on responsive */}

            {/* left section   */}
            <div className="bg-black1 hidden md:block md:basis-1/2 md:flex flex-col justify-between">
                <a href={''} className="md:mt-10 md:ml-20 flex-initial" onClick={(e) => handleSetHomeScreen(e)}>
                    <span className="text-primary text-5xl font-bold inline">&#60;</span>
                    <span className=" text-5xl font-bold inline text-white">Ali</span>
                    <span className="font-face-mulish  text-5xl font-bold inline text-primary">/&#62;</span>
                </a>
                <div className="flex items-center justify-center flex-auto">
                    <ul className='space-y-8 flex flex-col justify-center items-center'>
                        <li className="text-white text-5xl font-bold">
                            <a href='#'
                               className={`font-normal hover:text-primary hover:ml-2 ${activeLink === 'About' ? 'text-primary ml-2' : null}`}
                               onClick={(e) => handleSetPartial(e, 'About')}>{strings.home.about}</a>
                        </li>
                        <li className="text-white text-5xl font-bold">
                            <a href='#'
                               className={`font-normal hover:text-primary  hover:ml-2 ${activeLink === 'Skills' ? 'text-primary ml-2' : null}`}
                               onClick={(e) => handleSetPartial(e, 'Skills')}>Skills</a>
                        </li>
                        <li className="text-white text-5xl font-bold">
                            <a href='#'
                               className={`font-normal hover:text-primary  hover:ml-2 ${activeLink === 'Projects' ? 'text-primary ml-2' : null}`}
                               onClick={(e) => handleSetPartial(e, 'Projects')}>{strings.home.projects}</a>
                        </li>

                        <li className="text-white text-5xl font-bold">
                            <a href='#'
                               className={`font-normal hover:text-primary  hover:ml-2 ${activeLink === 'Contact' ? 'text-primary ml-2' : null}`}
                               onClick={(e) => handleSetPartial(e, 'Contact')}>{strings.home.contact}</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* end  left section   */}


            {/* Partials section */}
            <div className="flex-auto bg-black2 basis-full md:basis-1/2 text-center scrollbar-hide overflow-y-auto">
                <LanguageContext.Provider value={lan}>
                    {pagePartial}
                </LanguageContext.Provider>
            </div>
            {/* end partials section */}


            {/*  right side   */}
            <div className="bg-black1 hidden md:block md:basis-1/12 md:flex flex-col justify-between items-center py-8">
                <div className={'flex flex-col flex-grow justify-center space-y-6'}>
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

                <div className='flex flex-col space-y-4'>
                    <a href='#'
                       className={`hover:text-primary hover:text-primary text-sm  ${lan === 'en' ? 'text-primary' : 'text-grey'}`}
                       onClick={(e) => changeLanguage(e, 'en')}>EN</a>
                    <a href='#'
                       className={`hover:text-primary  hover:text-primary text-sm  ${lan === 'de' ? 'text-primary' : 'text-grey'}`}
                       onClick={(e) => changeLanguage(e, 'de')}>DE</a>
                </div>
            </div>
            {/*  end right side   */}
        </div>
    );
}

export default Home;
