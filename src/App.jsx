// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Nav from "./components/nav/nav";

import {Outlet} from "react-router-dom";
import Footer from "./components/footer/social";


import "./App.css"; // Import a separate stylesheet for your App component

function App() {
  return (
    <div>

    
    <Nav />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
  )



}

export default App;

