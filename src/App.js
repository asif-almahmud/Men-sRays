import { HomePage, ProductPage } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/product/:selectedProduct"
          element={<ProductPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
