import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {

    const [imageSearch, setImageSearch] = useState(false);
    const [mode, setMode] = useState("light");

    return (
        <Context.Provider value={{
            imageSearch,
            setImageSearch,
            mode,
            setMode
        }}>
            {props.children}
        </Context.Provider>
    );
};
