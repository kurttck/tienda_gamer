
import Hero from "./components/Hero";
import Details from "./views/Details";
import NotFound  from "./views/NotFound";
import OnSale from "./views/OnSale";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const browserRouter = createBrowserRouter([
  {path: "/", element: <Hero /> },
  {path: "/details/:id", element: <Details />},
  {path: "/*", element: <NotFound /> },
  {path: "/onsale", element: <OnSale />}
]) 

const App: React.FC=()=>{
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>

  );
}

export default App;
