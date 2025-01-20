import React from "react";
import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
    // user: I have a variable through which I can access the data, and
    // setUser: I have a method through which I can set any data into this user  
  const [user, setUser] = useState(null);
  return (
    // so I have access to all of this, and now I want to pass on this, 
    // the way: using value={}, as an object I want to give you access to this user and
    // also want to give access to setUser
    // So that you can read the data as well as write the data in this user state!
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
