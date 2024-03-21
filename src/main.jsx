import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home/Home';
import Foods from './component/Foods/Foods';
import About from './component/About/About';
import Contract from './component/Contract/Contract';
import ShowCategoryDetails from './component/ShowCategoryDetails/ShowCategoryDetails';
import PerFoodDetails from './component/PerFoodDetails/PerFoodDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [ 
      {
        path:'/foods',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Foods></Foods>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contract',
        element:<Contract></Contract>
      },
      {
        path:'/foods/:foodsCategory',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.foodsCategory}`),
        element:<ShowCategoryDetails></ShowCategoryDetails>
      },
      {
        path:'/food/:foodsId',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodsId}`),
        element:<PerFoodDetails></PerFoodDetails>
      }
     ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
