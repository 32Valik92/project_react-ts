import React, {FC, useContext} from 'react';
import {Outlet} from "react-router-dom";

import {Header, ThemeContext} from "../components";
import './MainLayout.css';

const MainLayout: FC = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};