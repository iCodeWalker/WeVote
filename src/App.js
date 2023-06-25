import "./App.css";

import DetailList from "./components/details/detailList";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/homePage";

import { useSelector } from "react-redux";
import HomeSection from "./sections/homeSection";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";
import StateDetailPage from "./pages/StateDetailPage/StateDetailPage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  const data = useSelector((state) => state.data);

  console.log(data);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          ></Route>
          <Route
            exact
            path="/details"
            element={
              <>
                <DetailPage />
              </>
            }
          ></Route>
          <Route
            exact
            path="/user-detail"
            element={
              <>
                <Header />
                <UserDetailPage />
              </>
            }
          ></Route>
          <Route
            exact
            path="/about-us"
            element={
              <>
                <Header />
                <AboutUsPage />
              </>
            }
          ></Route>
          <Route
            exact
            path="/contact-us"
            element={
              <>
                <Header />
                <ContactUsPage />
              </>
            }
          ></Route>

          <Route
            exact
            path="/state-detail/:stateName"
            element={
              <>
                <Header />
                <StateDetailPage />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
