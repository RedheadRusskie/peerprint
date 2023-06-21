import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/placeholder1" element={<>placeholder1</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
