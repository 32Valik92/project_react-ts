import React, {FC, useContext} from 'react';
import ReactSwitch from "react-switch";
import {FaSun, FaMoon} from 'react-icons/fa';

import {ThemeContext} from "../ThemeContext/ThemeContext";
import css from '../Header/Header.module.css';

const Switcher: FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    // My sun icon from react-icons/fa
    const checkedIcon = (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <FaSun size={16} color="#ffffff"/>
        </div>
    );

    // My moon icon from react-icons/fa
    const uncheckedIcon = (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <FaMoon size={16} color="#ffffff"/>
        </div>
    );

    return (
        <div className={css.switcher}>
            <ReactSwitch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                onColor="#1b9aaa"
                offColor="#000000"
                checkedIcon={checkedIcon}
                uncheckedIcon={uncheckedIcon}
                handleDiameter={20}
            />
        </div>
    );
};

export {Switcher};