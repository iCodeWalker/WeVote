import "./App.css";
import DetailCard from "./components/details/detailCard";
import DetailList from "./components/details/detailList";
import Header from "./components/header";
import MapComponent from "./components/mapComponent";
import { addItem, removeItem } from "./data/redux/actions/action";
import CheckBoxWithSelectAll from "./pages/checkboxPage";
import HomePage from "./pages/homePage";

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
      <Header />
      <HomePage />
      <DetailList />
      <CheckBoxWithSelectAll />
      {data?.map((item, index) => {
        return <p></p>;
      })}

      <button onClick={() => dispatch(addItem({ id: 2, name: "second" }))}>
        Click to add
      </button>
      <button onClick={() => dispatch(removeItem(0))}>Click to delete</button>
    </div>
  );
}

export default App;
