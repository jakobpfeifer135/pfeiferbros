import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import Error from './pages/error.jsx';
import Home from './pages/Home.jsx';
import Contact from './components/contact/contact.jsx';
// import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    
    element: <App />,
    
    children: [
      {
        index: true,
        element: <Home />,
      },
    
      {
        path: '/Services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
