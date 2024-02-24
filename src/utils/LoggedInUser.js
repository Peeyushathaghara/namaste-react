import { createContext } from "react";

const LoggedInUser = createContext({
    user: "Default User"
})

export default LoggedInUser;