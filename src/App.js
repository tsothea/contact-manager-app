import './css/bootstrap.min.css';
import './css/style.css';
import './App.css';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';

import Companies from "./pages/Companies";
import Contacts from "./pages/Contacts";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import People from "./pages/People";
import Setting from "./pages/Setting";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper d-flex align-items-stretch">
          <Navigation />
          <div id="content" className="p-4 p-md-5 pt-5">
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contacts" element={<Contacts />} />
              <Route exact path="/favorites" element={<Favourites />} />
              <Route exact path="/people" element={<People />} />
              <Route exact path="/companies" element={<Companies />} />
              <Route exact path="/setting" element={<Setting />} />
              <Route exact path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
