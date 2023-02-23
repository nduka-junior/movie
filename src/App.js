import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { fetchapi } from "./fetchapi";
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
  const [trendings, settrendings] = useState([]);
  const [loading, setLoading] = useState(false);
  // routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Trending trendings={trendings.results} loading={loading} />}></Route>
        <Route path="/movies/:id" element={<SingleMovies />}></Route>
      </Route>
    )
  );
  const apifetch = async () => {
    setLoading(true);

     settrendings( await fetchapi("https://api.themoviedb.org/3/trending/all/day?"));
    setLoading(false);
  };

  useEffect(() => {
    apifetch();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
