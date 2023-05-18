import {createContext, FC, ReactNode, useState} from 'react';

export const ThemeContext = createContext(null);

interface IProps {
    children: ReactNode;
}

const ThemeProvider: FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = (): void => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider};