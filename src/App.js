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
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const data = useSelector((state) => state.data);

  console.log(data);
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          ></Route>
          <Route
            path="/state-detail"
            element={
              <>
                <DetailPage />
              </>
            }
          ></Route>
          <Route
            path="/user-detail"
            element={
              <>
                <Header />
                <UserDetailPage />
              </>
            }
          ></Route>
          <Route
            path="/about-us"
            element={
              <>
                <Header />
                <AboutUsPage />
              </>
            }
          ></Route>
          <Route
            path="/contact-us"
            element={
              <>
                <Header />
                <ContactUsPage />
              </>
            }
          ></Route>

          <Route
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
