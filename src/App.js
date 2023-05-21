import "./App.css";
import DetailCard from "./components/details/detailCard";
import Header from "./components/header";
import MapComponent from "./components/mapComponent";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <DetailCard />
    </div>
  );
}

export default App;
