
// import Header from './Header';
// function App() {
//   return (
//     <div>
//      <Header/>
//     </div>
//   );
// }

// export default App;




import React from 'react'
import Header from './Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";

import Products from './Products';
import AboutUS from './AboutUS';
import ContactUS from './ContactUS';
import Services from './Services';
import Login from './Login';
import SignUP from './SignUP'
function App() {
  return (
    <>
      <Router>
      <Header/>

        <Routes>
        <Route path="/products" element={<Products />}>
          </Route>
          <Route path="/aboutus" element={<AboutUS />}>
          </Route>
          <Route path="/contactus" element={<ContactUS />}>
          </Route>

         
          <Route path="/services" element={<Services />}>
          </Route>
          
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/signup" element={<SignUP />}>
          </Route>
          {/* <Route path="/" element={<h1>Welcome</h1>}></Route> */}

    
          {/* <Route path='*' element={<h1>Page not Found</h1>}></Route> */}

        </Routes>
      </Router>

    </>
  )
}

export default App