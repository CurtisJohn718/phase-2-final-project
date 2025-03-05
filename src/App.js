import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home';
import About from "./Pages/About";
import ViewAllAnimals from './Pages/ViewAllAnimals';

const router = createBrowserRouter([
  {path: "/", element: <Home /> },
  {path: "/about", element: <About /> },
  {path: "/view-animals", element: <ViewAllAnimals /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
