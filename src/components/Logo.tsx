import React from "react";
import {ILogoProps} from "./interfaces/ComponentsInterfaces";

const Logo : React.FC<ILogoProps> = ({handleSetHomeScreen , HiddeOnMobileScreen}) => {
  return (
      <button className={`md:mt-10 md:ml-10 flex-initial md:self-start ${HiddeOnMobileScreen && 'hidden md:block'}`}  onClick={(e) => handleSetHomeScreen(e)}>
          <span className="text-primary text-2xl md:text-5xl font-bold inline">&#60;</span>
          <span className=" text-2xl md:text-5xl  font-bold inline text-white">Ali</span>
          <span className="font-face-mulish text-2xl md:text-5xl font-bold inline text-primary">/&#62;</span>
      </button>
  )
}
export default Logo
