import React, {FC} from 'react';

import css from '../Header/Header.module.css';
import cssUser from './User.module.css';

const User: FC = () => {
    return (
        <div className={css.userDiv}>
            <div className={cssUser.icon}>ST</div>
            <div className={cssUser.surname}>Student</div>
        </div>
    );
};

export {User};
