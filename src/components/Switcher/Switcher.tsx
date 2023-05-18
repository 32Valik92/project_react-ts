import React, {FC, useContext} from 'react';
import ReactSwitch from "react-switch";

import {ThemeContext} from "../ThemeContext/ThemeContext";

const Switcher: FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div>
            <ReactSwitch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                onColor="#00ff00"
                offColor="#ff0000"
                handleDiameter={20}
            />
            <label>Змінити тему</label>
        </div>
    );
};

export {Switcher};