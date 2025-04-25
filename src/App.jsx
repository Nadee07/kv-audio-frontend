
import "./App.css"; 
import AdminPage from "./pages/admin/AdminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/login/login";
import Testing from "./components/testing";

function App() {

  return (
  <BrowserRouter>
   <Routes path ="/*">

      < Route path = "/Testing" element={<h1>Testing</h1>}/>
      <Route path = "/login" element={<LoginPage/>}/>
       <Route path = "/admin/*" element={<AdminPage/>}/>
       <Route path = "/" element={<HomePage/>}/>
       <Route path = "/*" element={<h1>Not found</h1>}/>


  </Routes>
  </BrowserRouter>
  );
}

export default App;
