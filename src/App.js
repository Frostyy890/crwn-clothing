import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="shop/hats" element={<HatsPage />} />
      </Routes>
      {/* exact accepts booleans, if there is no value then it's true by default*/}
    </div>
  );
}

export default App;
