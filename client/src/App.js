import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from './Home/Home';
import ForIndividual from './components/ForIndividual/forindividual';
import ForOrganisation from './components/ForOrganisation/fororganisation';
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/forindividual" component={ForIndividual} />
        <Route path="/fororganisation" component={ForOrganisation} />
        <Route path="/login" component>
          </Switch> */}


      </BrowserRouter>
    </>
  );
}

export default App;
