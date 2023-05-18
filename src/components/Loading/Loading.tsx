import React, {FC} from 'react';

import css from './Loading.module.css';

const Loading: FC = () => {
    return (
        <div className={css.spinner}>

        </div>
    );
};

export {Loading};