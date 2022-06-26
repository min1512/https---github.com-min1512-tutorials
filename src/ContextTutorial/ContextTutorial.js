import React, {useState,createContext} from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial()
{
    const [userName, setUserName] = useState("");

    return(
        <AppContext.Provider value={{userName,setUserName}}>
            <Login></Login>
            <User></User>
        </AppContext.Provider>
    );

}

export default ContextTutorial;