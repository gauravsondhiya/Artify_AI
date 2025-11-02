import React, { useState,useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    status:false,
    username:""
  });

    useEffect(() => {
      const storedUser = localStorage.getItem("token");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;