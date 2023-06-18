import "./App.css";

import DetailList from "./components/details/detailList";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";

import { useSelector } from "react-redux";
import HomeSection from "./sections/homeSection";

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
          <Route exact path="/details" element={<DetailList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
