
import {
  Routes,
  Route,
  useNavigation,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/Register";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Gallery from "./pages/Gallery";
import Themes from "./pages/Themes";
import Admin from "./components/Admin";
import UserDashboardComponent from "./components/User";
import Book from "./components/Book";
import Payment from "./components/Payment";
import Customize from "./components/Customize";
import {Provider} from 'react-redux'
import { store } from "./redux/reducer/store";
import { useEffect } from "react";
import Ordersvalue from "./components/GetOrders";
import Usersvalue from "./components/GetUsers";
function App() {
 

  return (
    <>
      {/* <ResponsiveAppBar isLoggedIn={isLoggedIn} /> */}
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/* <ResponsiveAppBar isLoggedIn={isLoggedIn} /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/user" element={<UserDashboardComponent />} />
              <Route path="/book" element={<Book />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/customize" element={<Customize />} />
              <Route path="/appbar" element={<ResponsiveAppBar />} />
              <Route path="/getorder" element={<Ordersvalue />} />
              <Route path="/usersvalue" element={<Usersvalue />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
