import  { useContext, useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";
import { UserContext } from "./Context/Context";

const App = () => {
    const {toggler, users} = useContext(UserContext)

    

  return (
    <main className="w-screen min-h-screen flex overflow-auto ">
      <div className="w-[70%] p-0 overflow-auto flex items-center justify-center bg-gray-800">
        {toggler ? (
          <SignIn />
        ) : (
          <SignUp  />
        )}

       
      </div>

      <Users />
    </main>
  );
};

export default App;

