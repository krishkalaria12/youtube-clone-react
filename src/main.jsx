import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from "./Layout"
import Error from '../src/Extra/Error.jsx';
import { Feed, VideoDetail, ChannelDetail, SearchFeed} from "./pages/pages"
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
      <Route path='' exact element={<Feed />} />
      <Route path='/video/:id' exact element={<VideoDetail />} />
      <Route path='/channel/:id' exact element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
