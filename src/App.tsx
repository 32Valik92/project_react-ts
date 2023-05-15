import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviePage} from "./pages";
import {MoviesChoseGenre} from "./components";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviePage/>}/>
                <Route path={'choseGenre'} element={<MoviesChoseGenre/>}/>
                <Route path={'movieInfo'} element={<MovieInfoPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;