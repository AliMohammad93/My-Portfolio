import React from "react";

export interface IButtonProps {
    onClick: () => void;
    label: string;
    icon?: React.ReactNode;
}

export interface ILogoProps {
    handleSetHomeScreen : (e:  React.MouseEvent) => void,
    HiddeOnMobileScreen? : boolean,
}
