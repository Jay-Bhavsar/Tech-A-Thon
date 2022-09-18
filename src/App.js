import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
// import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home.js";
import './App.css'
import Dataentry from "./Components/Admin/Dataentry";
import { Admin } from "./Components/User/admin";
import Calander from "./Components/User/calendar";
import Box from "./Components/Box";
function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          {/* <Route exact path="/" element={<LoginSignup/>} /> */}
          <Route exact path="/admin" element={<Dataentry/>} />
        </Routes>  
        <Routes>
          {/* <Route exact path="/" element={<LoginSignup/>} /> */}
          <Route exact path="/schedule" element={<Admin/>} />
        </Routes>  
        <Routes>
          <Route exact path="/details" element={<Box/>} />
        </Routes> 
        <Routes>
          {/* <Route exact path="/" element={<LoginSignup/>} /> */}
          <Route exact path="/user" element={
          <Calander/>
          
                    } />
        </Routes>
        {/* <Routes>
          <Route exact path="/" element={<LoginSignup/>} />
          <Route exact path="/user" element={
          <Admin/>
          
                    } />
        </Routes> */}

       
      </Router>
    </>
  );
}

export default App;
