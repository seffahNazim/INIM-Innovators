import "./App.css";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "./context/contextProvider";
import { useEffect, useState } from "react";

function App() {
  const { token } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token !== undefined) {
      setLoading(false);
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center w-[100vw]  py-[1%] px-[10%]">
      <Outlet />
    </div>
  );
}

export default App;
