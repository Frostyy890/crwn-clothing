import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
      {/* exact accepts booleans, if there is no value then it's true by default*/}
    </div>
  );
}

export default App;
