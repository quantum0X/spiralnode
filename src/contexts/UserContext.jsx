import { createContext, useState } from "react";

// user context
export const UserContext = createContext({});
export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
