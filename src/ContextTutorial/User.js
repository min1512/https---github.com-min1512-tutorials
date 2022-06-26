import React, {useContext} from "react";
import { AppContext } from "./ContextTutorial";

function User()
{
    const {userName} = useContext(AppContext); 

    return(
        <div>
            <h1>User : {userName}</h1>
        </div>
    );

}

export default User;
