import { createContext, useContext, useState, useEffect } from "react";
import { setHandleToken } from "../tokenManager";

const StateContext = createContext({
  token: null,
  handleToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(123);

  function handleToken(token) {
    setToken(token);
    if (token) {
      localStorage.setItem("access_token", token);
    } else {
      localStorage.removeItem("access_token");
      setToken(null);
    }
  }

  useEffect(() => {
    setHandleToken(handleToken);
  }, []);

  return (
    <StateContext.Provider
      value={{
        token,
        handleToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);