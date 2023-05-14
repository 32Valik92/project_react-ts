import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {User} from "../User/User";

const Header: FC = () => {
    return (
        <div>
            <div>
                <NavLink to={'movies'}>Movies</NavLink>
            </div>

            <div>
                <NavLink to={'about'}>About this project</NavLink>
            </div>

            <div>
                <User/>
            </div>
        </div>
    );
};

export {Header};