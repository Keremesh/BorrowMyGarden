import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

//import NavBar from "./Navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/auth/Login";
import LandingPage from "./components/landingpage/LandingPage";
import CreateGarden from "./components/createGarden/CreateGarden";
import NavBarFalse from "./components/navbarfalse/NavBarFalse";
import NavBar from "./components/navbar/NavBar";
import AllGardensView from "./components/gardenViews/AllGardensView";
import SingleGardenView from "./components/gardenViews/SingleGardenView";
import ProfilePage from "./components/profilepage/ProfilePage";
import ViewMyListing from "./components/viewmylisting/ViewMyListing";
import Messages from "./components/messages/Messages";

 
const App = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://borrow_my_garden.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

 return (
   <div>
     <div className="App">
    <h1>{message}</h1>
  </div>
    
    <NavBarFalse> 
      <NavBar />
    </NavBarFalse>  
     <Routes>
       <Route path="/signup" element={<SignUp navigate={navigate} />} />
       <Route path="/login" element={<Login navigate={navigate} />} />
       <Route path="/" element={<LandingPage navigate={navigate} />} />
       <Route path="/add" element={<CreateGarden navigate={navigate} />} />
       <Route path="/gardens" element={<AllGardensView navigate={navigate} />} />
       <Route path="/gardens/:_id" element={<SingleGardenView navigate={navigate} />} />
       <Route path="/profilepage" element={<ProfilePage navigate={navigate} />} />
       <Route path="/viewmylisting" element={<ViewMyListing navigate={navigate} />} />
       <Route path="/messages" element={<Messages navigate={navigate} />} />
       {/* <Messages /> */}
      </Routes>
   </div>
 );
};
 
export default App;