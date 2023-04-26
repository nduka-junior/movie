import "./App.css";

import axios from "axios";

import Trending from "./component/Trending";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import SingleMovies from "./component/SingleMovies";

//
//
function App() {
 

  // // routes
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route index element={<Trending  />} path='/'></Route>
  //       <Route path="/movies/:id" element={<SingleMovies />}></Route>
  //     </Route>
  //   )
  // );
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Trending />,
      },
      {
        path: "/movies/:id",
        element: <SingleMovies />,
      },
    ],
    { basename: "/" }
  );


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
