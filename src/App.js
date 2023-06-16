import "./App.css";
import DetailCard from "./components/details/detailCard";
import DetailList from "./components/details/detailList";
import Header from "./components/header";
import MapComponent from "./components/mapComponent";
import { addItem, removeItem } from "./data/redux/actions/action";
import CheckBoxWithSelectAll from "./pages/checkboxPage";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const productData = {
    id: "1",
    name: "iPhone",
    price: "84000",
    date: "27/08/2022",
    type: "mobile",
  };

  console.log(data);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details" element={<DetailList />} />
      </Routes>
    </div>
  );
}

export default App;
