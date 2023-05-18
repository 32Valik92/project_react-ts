import React, {FC} from 'react';

import '../Header/Header.css';
import './User.css';

const User: FC = () => {
    return (
        <div className={'userDiv'}>
            <div className={'icon'}>ST</div>
            <div className={'surname'}>Student</div>
        </div>
    );
};

export {User};
