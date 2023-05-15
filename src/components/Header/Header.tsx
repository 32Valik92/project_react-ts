import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {User} from "../UserInfo/User";

const Header: FC = () => {
    return (
        <div>
            <div>
                <NavLink to={'movies'}>Movies</NavLink>
            </div>

            <div>
                <NavLink to={'movieInfo'}>MovieInfoPage</NavLink>
            </div>

            <div>
                <User/>
            </div>
        </div>
    );
};

export {Header};