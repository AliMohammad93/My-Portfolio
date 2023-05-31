import React, {useState, useEffect, useContext} from 'react';
import {SiStackoverflow, SiGithub, SiLinkedin} from "react-icons/si";
import strings from "../localization/languages";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Logo from './../components/Logo'
import {useCookies} from 'react-cookie';
import {LanguageContext} from "../context/languageContext";

type Language = "en" | "de";
const Home: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [activePage, setActivePage] = useState(<About/>);
    const [activeLink, setActiveLink] = useState<string>('About');
    const [cookies, setCookie] = useCookies(['preferredLanguage']);

    const {language, setLanguage} = useContext(LanguageContext);

    const handleSetHomeScreen = (e: React.MouseEvent) => {
        e.preventDefault();
        setActivePage(<About/>);
        setActiveLink('About');
    }

    const changeLanguage = (e: React.MouseEvent, language: Language) => {
        e.preventDefault();
        strings.setLanguage(language);
        setLanguage(language);
        setCookie('preferredLanguage', language, {expires: new Date((+new Date) + 2678400000)});
    }

    const handleSetPartial = (e: React.MouseEvent, PartialName: string) => {
        e.preventDefault();
        setActiveLink(PartialName);
        switch (PartialName) {
            case 'About':
                setActivePage(<About/>);
                break;
            case 'Skills':
                setActivePage(<Skills/>)
                break;
            case 'Projects':
                setActivePage(<Projects/>)
                break;
            case 'Contact':
                setActivePage(<Contact/>)
                break;
            default:
                setActivePage(<About/>);
        }
        setOpenMenu(false);
    }

    const toggleOpenHamburgerMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpenMenu(openMenu => !openMenu)
    }

    useEffect(() => {
        if (cookies?.preferredLanguage) {
            setLanguage(cookies?.preferredLanguage);
            strings.setLanguage(cookies?.preferredLanguage)
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen relative">
            {/* left side */}
            <div className={'bg-navy md:hidden flex flex-row justify-between p-4 flex-initial'}>
                <Logo handleSetHomeScreen={handleSetHomeScreen} HiddeOnMobileScreen={false}/>
                <div className={"z-50 p-2"} onClick={(e) => toggleOpenHamburgerMenu(e)}>
                    <div id="nav-icon3" className={`${openMenu && "open"} `}>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
            </div>
            <div
                className={`bg-darkNavy absolute ${!openMenu && 'hidden'} md:flex md:relative h-screen w-full md:basis-1/2 grid grid-cols-1 `}>
                <div className='flex flex-col justify-between items-center h-full w-full'>
                    <Logo handleSetHomeScreen={handleSetHomeScreen} HiddeOnMobileScreen={true}/>
                    <div className='flex flex-col flex-auto justify-center items-center space-y-6'>
                        <div className="text-white text-3xl md:text-5xl font-bold">
                            <button
                                className={`font-normal hover:text-primary hover:ml-2 ${activeLink === 'About' && 'text-primary ml-2'}`}
                                onClick={(e) => handleSetPartial(e, 'About')}>{strings.home.about}</button>
                        </div>
                        <div className="text-white text-3xl md:text-5xl font-bold">
                            <button
                                className={`font-normal hover:text-primary  hover:ml-2 ${activeLink === 'Skills' && 'text-primary ml-2'}`}
                                onClick={(e) => handleSetPartial(e, 'Skills')}>{strings.home.skills}</button>
                        </div>
                        <div className="text-white text-3xl md:text-5xl font-bold">
                            <button
                                className={`font-normal hover:text-primary hover:ml-2 ${activeLink === 'Projects' && 'text-primary ml-2'}`}
                                onClick={(e) => handleSetPartial(e, 'Projects')}>{strings.home.projects}</button>
                        </div>

                        <div className="text-white text-3xl md:text-5xl font-bold">
                            <button
                                className={`font-normal hover:text-primary  hover:ml-2 ${activeLink === 'Contact' && 'text-primary ml-2'}`}
                                onClick={(e) => handleSetPartial(e, 'Contact')}>{strings.home.contact}</button>
                        </div>
                    </div>
                    <div
                        className={"md:hidden text-center space-x-3 py-4 w-full border-t border-t-[#94a1ab]/[.30]"}>
                        <button
                            className={`text-sm ${language === 'en' ? 'text-primary' : 'text-grey'}`}
                            onClick={(e) => changeLanguage(e, 'en')}>EN
                        </button>
                        <button
                            className={`text-sm  ${language === 'de' ? 'text-primary' : 'text-grey'}`}
                            onClick={(e) => changeLanguage(e, 'de')}>DE
                        </button>
                    </div>
                </div>
            </div>

            {/* pages section */}
            <div className="flex-auto bg-navy basis-full md:basis-1/2 text-center scrollbar-hide overflow-y-auto">
                {activePage}
            </div>


            {/*  right side   */}
            <div
                className="bg-darkNavy hidden md:block md:basis-1/12 md:flex flex-col justify-between items-center py-8">
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
                    <button
                        className={`hover:text-primary text-sm  ${language === 'en' ? 'text-primary' : 'text-grey'}`}
                        onClick={(e) => changeLanguage(e, 'en')}>EN
                    </button>
                    <button
                        className={`hover:text-primary text-sm  ${language === 'de' ? 'text-primary' : 'text-grey'}`}
                        onClick={(e) => changeLanguage(e, 'de')}>DE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
