import { Outlet } from "react-router-dom";
import { AppContextProvider } from "./context";

const AppContextLayout = () => {
  return (
    <AppContextProvider>
      <Outlet />
    </AppContextProvider>
  );
};

export default AppContextLayout;
