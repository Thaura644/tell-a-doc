import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Home/Home';
import ForIndividual from './ForIndividual/forindividual';
import ForOrganisation from './ForOrganisation/fororganisation';
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css'; 
function App() {
  return (
    <>
    <div className = "App">  <Navbar/>
    <ForIndividual/>
    <ForOrganisation/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
           <div className="App">
      <header className="App-header">
        <h1>Welcome to my React app</h1>
      </header>
      <div className="App-body">
        <p>This is the content of my app.</p>
      </div>
    </div>

      </BrowserRouter> 
      </div>
    <Navbar/>
    <ForIndividual/>
    <ForOrganisation/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
           <div className="App">
      <header className="App-header">
        <h1>Welcome to my React app</h1>
      </header>
      <div className="App-body">
        <p>This is the content of my app.</p>
      </div>
    </div>

      </BrowserRouter>
    </>
  );
}

export default App;
