import { createContext, useState } from "react";

export const UserContext = createContext()

const Context = (props) => {
    const [toggler, settoggler] = useState(true); // false = Sign In, true = Sign
    const [users, setusers] = useState([])

  return (
    <div>
        <UserContext value={{toggler, settoggler, users, setusers}}>{props.children}</UserContext>
    </div>
  )
}

export default Context
