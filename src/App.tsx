import { useLocation, useRoutes } from "react-router-dom"
import { ScreenError404 } from "./components/screens";
import { routes } from "./routes";

export const App = () => {

  const { pathname } = useLocation();

  return useRoutes([
    ...routes(pathname),
    {
      path: '*', element: <ScreenError404/>
    }
  ])  
}