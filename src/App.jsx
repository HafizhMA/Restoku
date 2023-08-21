import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import FavoritePage from "./Pages/FavoritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;
